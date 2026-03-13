import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, ShieldCheck, Lock, Zap, ArrowRight } from "lucide-react";

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
    <section id="validation-section" className="py-32 relative overflow-hidden bg-foreground">
      {/* Background texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.06]" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-primary/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] bg-blue-400/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  <Zap size={11} />
                  Priority Access
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4 leading-tight">
                  Secure Your Position<br />in the Network
                </h2>
                <p className="text-base text-white/50 max-w-sm mx-auto leading-relaxed">
                  We're opening FreeTrust to a limited group of early members. Join to lock in founding status before public launch.
                </p>
              </div>

              {/* Form card */}
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-8 backdrop-blur-sm">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-white/70 text-sm font-medium">
                      Work Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="alex@company.com"
                      data-testid="input-email"
                      className="h-12 rounded-xl bg-white/8 border-white/12 text-white placeholder:text-white/30 focus-visible:ring-primary/40 focus-visible:border-primary/60 transition-all"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-400">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  {/* Role */}
                  <div className="space-y-1.5">
                    <Label htmlFor="role" className="text-white/70 text-sm font-medium">
                      Primary Role <span className="text-primary">*</span>
                    </Label>
                    <Select
                      onValueChange={(value: "Client" | "Freelancer" | "Investor") => form.setValue("role", value)}
                    >
                      <SelectTrigger
                        data-testid="select-role"
                        className="h-12 rounded-xl bg-white/8 border-white/12 text-white focus:ring-primary/40 focus:border-primary/60 transition-all [&>span]:text-white/30 data-[state=open]:[&>span]:text-white"
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
                      <p className="text-sm text-red-400">{form.formState.errors.role.message}</p>
                    )}
                  </div>

                  {/* City + Industry */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="city" className="text-white/70 text-sm font-medium">
                        City <span className="text-white/30 font-normal">(Optional)</span>
                      </Label>
                      <Input
                        id="city"
                        placeholder="London, UK"
                        data-testid="input-city"
                        className="h-12 rounded-xl bg-white/8 border-white/12 text-white placeholder:text-white/30 focus-visible:ring-primary/40 focus-visible:border-primary/60 transition-all"
                        {...form.register("city")}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="category" className="text-white/70 text-sm font-medium">
                        Industry <span className="text-white/30 font-normal">(Optional)</span>
                      </Label>
                      <Input
                        id="category"
                        placeholder="e.g. Software, Legal"
                        data-testid="input-industry"
                        className="h-12 rounded-xl bg-white/8 border-white/12 text-white placeholder:text-white/30 focus-visible:ring-primary/40 focus-visible:border-primary/60 transition-all"
                        {...form.register("category")}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    data-testid="button-submit-waitlist"
                    className="w-full h-13 py-4 text-base font-semibold rounded-xl mt-2 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Securing your position...
                      </>
                    ) : (
                      <>
                        Request Early Access
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Trust strip */}
              <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                <span className="flex items-center gap-1.5 text-xs text-white/35 font-medium">
                  <ShieldCheck size={13} className="text-white/40" />
                  Data encrypted, never shared
                </span>
                <span className="w-px h-3 bg-white/15 hidden sm:block" />
                <span className="flex items-center gap-1.5 text-xs text-white/35 font-medium">
                  <Lock size={13} className="text-white/40" />
                  No credit card required
                </span>
                <span className="w-px h-3 bg-white/15 hidden sm:block" />
                <span className="flex items-center gap-1.5 text-xs text-white/35 font-medium">
                  <Zap size={13} className="text-white/40" />
                  Cancel anytime
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center py-12 flex flex-col items-center gap-5"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl font-bold font-display text-white mb-3">Position Secured</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto">
                  You're on the FreeTrust priority waitlist. We'll notify you the moment access opens for your role.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsSuccess(false)}
                className="mt-2 rounded-xl h-11 px-7 border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white font-medium transition-all"
              >
                Register Another
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
