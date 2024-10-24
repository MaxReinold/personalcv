"use client"

import ClientLayout from "../clientLayout";
import { FormEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import '../scrollbar.css'

type FormData = {
  name: string;
  email: string;
  message: string;
}

type FormErrors = {
  name: string|null;
  email: string|null;
  message: string|null;
  hasErrors: boolean;
}

export default function Contact() {
  const [formData, updateFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({
    name: null,
    email: null,
    message: null,
    hasErrors: true,
  })

  const { toast } = useToast();

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    if(!errors.hasErrors) {
      toast({
        title: "Message Sent!",
        description: "I will respond sometime during the next working day."
      })
  
      updateFormData({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  useEffect(() => {
    const nameError =(formData.name.length < 1) ? "Please provide a name to address you by in my follow up." : null;
    const emailError = (formData.email.length < 3 || (formData.email.indexOf("@") == -1) || (formData.email.indexOf(".") == -1)) ? "Please provide a valid email." : null
    const messageError = (formData.message.split(" ").length < 3) ? "Your message isn't long enough!" : null
    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
      hasErrors: nameError != null || emailError != null || messageError != null
    })
  }, [formData])

  return (
    <ClientLayout>
      <form 
      onSubmit={(e) => handleSubmit(e)} 
      className="max-w-md mx-auto h-full flex flex-col justify-center gap-3 snap-y"
      >
        <h2 className="text-center text-3xl">contact me</h2>
        <div><Label className="ml-4" htmlFor="name">name</Label>
        <Input 
          name="name" 
          id="name" 
          value={formData.name}
          onChange={(e) => updateFormData({ ... formData, name: e.target.value })}
        /></div>
        <div><Label className="ml-4" htmlFor="email">email</Label>
        <Input 
          name="email" 
          id="email" 
          value={formData.email}
          onChange={(e) => updateFormData({ ... formData, email: e.target.value })}
        /></div>
        <div><Label className="ml-4" htmlFor="message">message</Label>
        <Textarea 
          name="message" 
          className="h-64 max-h-96" 
          value={formData.message}
          onChange={(e) => updateFormData({ ... formData, message: e.target.value })}
        />
        </div>
        <Button 
          type="submit" 
          variant="outline" 
          className='w-48 mx-auto' 
          disabled={errors.hasErrors}
        >
          submit
        </Button>
      </form>
    </ClientLayout>
  );
}