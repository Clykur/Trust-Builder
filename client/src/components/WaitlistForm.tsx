import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateWaitlist } from "@/hooks/use-waitlist";
import { api } from "@shared/routes";

// Type derived directly from API contract
type WaitlistFormValues = z.infer<typeof api.waitlist.create.input>;

export function WaitlistForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const mutation = useCreateWaitlist();

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(api.waitlist.create.input),
    defaultValues: {
      email: "",
      role: undefined,
      city: "",
      category: "",
    },
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    try {
      await mutation.mutateAsync(data);
      setIsSuccess(true);
    } catch (error) {
      // Error handled by hook toast
    }
  };

  return (
    <section id="validation-section" className="py-24 relative z-10">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2rem] bg-card border border-border/50 shadow-2xl shadow-primary/5 relative overflow-hidden"
          >
            {/* Decorative background blur inside card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold font-display text-foreground mb-3">
                        Validation Section
                      </h2>
                      <p className="text-muted-foreground">
                        Join the waitlist for exclusive early access to the FreeTrust network.
                      </p>
                    </div>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground/80 font-medium">Work Email <span className="text-destructive">*</span></Label>
                        <Input 
                          id="email"
                          type="email" 
                          placeholder="alex@company.com"
                          className="h-12 rounded-xl bg-background/50 border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                          {...form.register("email")}
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role" className="text-foreground/80 font-medium">Primary Role <span className="text-destructive">*</span></Label>
                        <Select 
                          onValueChange={(value: "Client" | "Freelancer" | "Investor") => form.setValue("role", value)}
                        >
                          <SelectTrigger className="h-12 rounded-xl bg-background/50 border-border/60 focus:ring-primary/20 focus:border-primary transition-all">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl">
                            <SelectItem value="Client">Client / Enterprise</SelectItem>
                            <SelectItem value="Freelancer">Freelancer / Agency</SelectItem>
                            <SelectItem value="Investor">Investor / Capital</SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.role && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.role.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="city" className="text-foreground/80 font-medium">City <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                          <Input 
                            id="city"
                            placeholder="London, UK"
                            className="h-12 rounded-xl bg-background/50 border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                            {...form.register("city")}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-foreground/80 font-medium">Industry <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                          <Input 
                            id="category"
                            placeholder="e.g. Software, Legal"
                            className="h-12 rounded-xl bg-background/50 border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                            {...form.register("category")}
                          />
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        disabled={mutation.isPending}
                        className="w-full h-14 text-lg font-semibold rounded-xl mt-4 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Request Early Access"
                        )}
                      </Button>
                      
                      <p className="text-center text-xs text-muted-foreground mt-4">
                        By joining, you agree to our strict data privacy policies. We never share your information.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                      <CheckCircle2 size={40} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-foreground">Position Secured</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for joining the FreeTrust waitlist. We will notify you when priority access opens for your role.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 rounded-xl h-12 px-6 border-border hover:bg-muted"
                    >
                      Register Another
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
