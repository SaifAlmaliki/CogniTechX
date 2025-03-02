"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { MapPin, Mail, Clock, Loader2 } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type FormData = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useTranslations()

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          reply_to: data.email,
          subject: data.subject,
          message: data.message
        }
      )

      toast.success(t('contact.success.title'), {
        description: t('contact.success.description')
      })

      reset()
    } catch (error) {
      console.error('Email error:', error)
      toast.error(t('contact.error.title'), {
        description: t('contact.error.description')
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-[calc(1rem+1px)] blur-xl group-hover:blur-2xl transition-all duration-500 group-hover:opacity-100 opacity-0" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 bg-card rounded-2xl p-8 shadow-xl">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('contact.location.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.location.address')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('contact.email.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.email.address')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('contact.hours.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.hours.schedule')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      {t('contact.form.firstName')}
                    </label>
                    <Input
                      id="firstName"
                      placeholder={t('contact.form.firstNamePlaceholder')}
                      {...register("firstName")}
                      className={`bg-background/50 backdrop-blur-sm transition-colors hover:bg-background/80 focus:bg-background/80 ${errors.firstName ? "border-red-500" : ""}`}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      {t('contact.form.lastName')}
                    </label>
                    <Input
                      id="lastName"
                      placeholder={t('contact.form.lastNamePlaceholder')}
                      {...register("lastName")}
                      className={`bg-background/50 backdrop-blur-sm transition-colors hover:bg-background/80 focus:bg-background/80 ${errors.lastName ? "border-red-500" : ""}`}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    {...register("email")}
                    className={`bg-background/50 backdrop-blur-sm transition-colors hover:bg-background/80 focus:bg-background/80 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    id="subject"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    {...register("subject")}
                    className={`bg-background/50 backdrop-blur-sm transition-colors hover:bg-background/80 focus:bg-background/80 ${errors.subject ? "border-red-500" : ""}`}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t('contact.form.messagePlaceholder')}
                    className={`min-h-[150px] bg-background/50 backdrop-blur-sm transition-colors hover:bg-background/80 focus:bg-background/80 ${errors.message ? "border-red-500" : ""}`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    t('contact.form.submit')
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}