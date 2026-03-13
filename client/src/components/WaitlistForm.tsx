import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, ShieldCheck, Lock, Zap } from "lucide-react";

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
    <section id="validation-section" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-foreground/[0.022]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="pill-badge mb-5 inline-flex">Priority Access</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 mt-4">
            Secure Your Position<br />in the Network
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            We're opening FreeTrust to a limited group of early members. Join now to lock in founding status before public launch.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0 }}
              >
                <div className="rounded-3xl bg-card border border-border shadow-xl shadow-foreground/5 p-8 md:p-10">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-foreground/80 text-sm font-medium">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="alex@company.com"
                        data-testid="input-email"
                        className="h-12 rounded-xl bg-background border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                        {...form.register("email")}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    {/* Role */}
                    <div className="space-y-1.5">
                      <Label htmlFor="role" className="text-foreground/80 text-sm font-medium">
                        Primary Role <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        onValueChange={(value: "Client" | "Freelancer" | "Investor") => form.setValue("role", value)}
                      >
                        <SelectTrigger
                          data-testid="select-role"
                          className="h-12 rounded-xl bg-background border-border/60 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="Client">Client / Enterprise</SelectItem>
                          <SelectItem value="Freelancer">Freelancer / Agency</SelectItem>
                          <SelectItem value="Investor">Investor / Capital</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.role && (
                        <p className="text-sm text-destructive">{form.formState.errors.role.message}</p>
                      )}
                    </div>

                    {/* City + Industry */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="city" className="text-foreground/80 text-sm font-medium">
                          City <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="city"
                          placeholder="London, UK"
                          data-testid="input-city"
                          className="h-12 rounded-xl bg-background border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                          {...form.register("city")}
                        />
                        {form.formState.errors.city && (
                          <p className="text-sm text-destructive">{form.formState.errors.city.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="category" className="text-foreground/80 text-sm font-medium">
                          Industry <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="category"
                          placeholder="e.g. Software, Legal"
                          data-testid="input-industry"
                          className="h-12 rounded-xl bg-background border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                          {...form.register("category")}
                        />
                        {form.formState.errors.category && (
                          <p className="text-sm text-destructive">{form.formState.errors.category.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      data-testid="button-submit-waitlist"
                      className="w-full h-12 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Securing your position...
                        </>
                      ) : (
                        "Request Early Access"
                      )}
                    </Button>
                  </form>
                </div>

                {/* Trust strip */}
                <div className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-2">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck size={13} className="text-primary/60" />
                    Data encrypted, never shared
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock size={13} className="text-primary/60" />
                    No credit card required
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Zap size={13} className="text-primary/60" />
                    Be among the first to get access
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-3xl bg-card border border-border shadow-xl shadow-foreground/5 p-12 flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">Position Secured</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    You're on the FreeTrust priority waitlist. We'll notify you the moment access opens for your role.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                  className="mt-2 rounded-xl h-11 px-7 border-border hover:bg-muted font-medium"
                >
                  Register Another
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
