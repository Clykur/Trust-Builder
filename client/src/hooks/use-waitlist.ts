import { useMutation } from "@tanstack/react-query";
import { api, type WaitlistInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateWaitlist() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: WaitlistInput) => {
      const validated = api.waitlist.create.input.parse(data);
      
      const res = await fetch(api.waitlist.create.path, {
        method: api.waitlist.create.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        let errorMessage = "Failed to join waitlist. Please try again.";
        try {
          const errorData = await res.json();
          if (res.status === 400) {
            const parsedError = api.waitlist.create.responses[400].parse(errorData);
            errorMessage = parsedError.message;
          } else if (res.status === 409) {
            const parsedError = api.waitlist.create.responses[409].parse(errorData);
            errorMessage = parsedError.message;
          }
        } catch (e) {
          // Fallback to default message
        }
        throw new Error(errorMessage);
      }

      return api.waitlist.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Welcome aboard!",
        description: "You've successfully joined our priority waitlist.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
