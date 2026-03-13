import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, ShieldCheck, Lock, Users } from "lucide-react";

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

const trust = [
  { icon: ShieldCheck, text: "Your data is encrypted and never shared" },
  { icon: Lock, text: "No credit card required" },
  { icon: Users, text: "Open to freelancers, clients, and investors" },
];

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
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="pill-badge mb-6 inline-flex">Priority Access</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-5 mt-4">
            Secure Your Position <br />in the Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We're opening FreeTrust to a limited group of early members. Join now to lock in founding-member status before public launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

          {/* Left trust signals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-5 md:pt-4"
          >
            {trust.map((t, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  <t.icon size={18} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-2">{t.text}</p>
              </div>
            ))}
            <div className="pt-6 border-t border-border/40">
              <div className="text-sm text-muted-foreground">Be among the first professionals to get access when we launch.</div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-2xl shadow-primary/5 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-xl font-bold font-display text-foreground mb-6">
                        Request Early Access
                      </h3>

                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground/80 font-medium text-sm">
                            Work Email <span className="text-destructive">*</span>
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

                        <div className="space-y-2">
                          <Label htmlFor="role" className="text-foreground/80 font-medium text-sm">
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

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city" className="text-foreground/80 font-medium text-sm">
                              City <span className="text-muted-foreground font-normal">(Optional)</span>
                            </Label>
                            <Input
                              id="city"
                              placeholder="London, UK"
                              data-testid="input-city"
                              className="h-12 rounded-xl bg-background border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                              {...form.register("city")}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="category" className="text-foreground/80 font-medium text-sm">
                              Industry <span className="text-muted-foreground font-normal">(Optional)</span>
                            </Label>
                            <Input
                              id="category"
                              placeholder="e.g. Software, Legal"
                              data-testid="input-industry"
                              className="h-12 rounded-xl bg-background border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                              {...form.register("category")}
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          disabled={mutation.isPending}
                          data-testid="button-submit-waitlist"
                          className="w-full h-13 py-4 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                          {mutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Securing your position…
                            </>
                          ) : (
                            "Request Early Access →"
                          )}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          By joining, you agree to our privacy policy. We never share your information.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-10 flex flex-col items-center text-center space-y-4"
                    >
                      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                        <CheckCircle2 size={40} strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold font-display text-foreground">Position Secured</h3>
                      <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                        You're on the FreeTrust priority waitlist. We'll notify you the moment access opens for your role.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 rounded-xl h-11 px-7 border-border hover:bg-muted font-medium"
                      >
                        Register Another
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
