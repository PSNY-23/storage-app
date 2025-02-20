"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

type FormType = "sign-in" | "sign-up";

const AuthForm = ({ type }: { type: FormType }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 auth-form'>
          <h1 className='form-title'>{type === "sign-in" ? "Sign In" : "Sign Up"}</h1>
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem>
                  <div className='shad-form-item'>
                    <FormLabel className="shad-form-label">Full Name</FormLabel>
                  </div>
                  <FormControl>
                    <Input placeholder='Enter your full name' className="shad-input" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />
          )}
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
      {/* OTP Verification */}
    </>
  );
};

export default AuthForm;
