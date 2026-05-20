import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const EMAILJS_SERVICE_ID = "service_ug58smp";
const EMAILJS_TEMPLATE_ID = "template_zudab6b";
const EMAILJS_PUBLIC_KEY = "v2biqyLejma3uJDPw";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  businessName: z
    .string()
    .trim()
    .max(100, "Business name must be less than 100 characters")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      message: "",
    },
    mode: "onChange",
  });
  const { isSubmitting } = form.formState;
  const onSubmit = async (data: ContactFormValues) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          business_name: data.businessName || "Not provided",
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      form.setError("root", {
        message:
          "Failed to send message. Please try again or contact us via WhatsApp.",
      });
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/919207509746?text=${encodeURIComponent("Hi BrandWox! I'm interested in your dealership website services.")}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <PageTransition>
      <main className="min-h-screen pt-14 sm:pt-16 bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center px-1">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Get In Touch
              </span>
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Let's Grow Your <span className="text-accent">Dealership</span>
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Ready to get more enquiries? Drop us a message and we'll get
                back to you faster than you can say "sold".
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-10 sm:py-16 md:py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                      Message Sent!
                    </h2>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Thanks for reaching out! We'll get back to you within 24
                      hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 sm:mb-6">
                      Fill out the form and we'll be in touch within 24 hours.
                    </p>

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 sm:space-y-5"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">
                                Your Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Smith"
                                  className="bg-background h-10 sm:h-11 text-sm"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">
                                Email Address *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  className="bg-background h-10 sm:h-11 text-sm"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">
                                Business Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your Dealership Name"
                                  className="bg-background h-10 sm:h-11 text-sm"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">
                                Your Message *
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project..."
                                  rows={4}
                                  className="bg-background resize-none text-sm"
                                  {...field}
                                />
                              </FormControl>
                              <div className="flex justify-between items-center">
                                <FormMessage className="text-xs" />
                                <span className="text-xs text-muted-foreground ml-auto">
                                  {field.value?.length ?? 0}/1000
                                </span>
                              </div>
                            </FormItem>
                          )}
                        />

                        {form.formState.errors.root && (
                          <p className="text-sm text-destructive bg-destructive/10 rounded-md px-3 py-2">
                            {form.formState.errors.root.message}
                          </p>
                        )}

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-accent hover:bg-accent/90 text-secondary font-bold h-10 sm:h-11 text-sm sm:text-base"
                          disabled={isSubmitting}
                        >
                          <Send className="w-4 h-4" />
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                {/* WhatsApp CTA */}
                <div className="bg-[#25D366]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#25D366]/30">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                        Prefer WhatsApp?
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Get an instant response
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 sm:mb-6">
                    Skip the form and chat with us directly. We typically
                    respond within 5 minutes during business hours.
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    variant="whatsapp"
                    size="lg"
                    className="w-full group shadow-[0_0_25px_rgba(37,211,102,0.4)] bg-[#25D366] hover:bg-[#1da851] text-white font-bold h-10 sm:h-12 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="truncate">Chat on WhatsApp Now</span>
                  </Button>
                  <p className="text-center text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 flex items-center justify-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#25D366] rounded-full animate-pulse" />
                    Usually replies within 5 minutes
                  </p>
                </div>

                {/* Contact Details */}
                <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                    Contact Details
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Email Us
                        </div>
                        <a
                          href="mailto:hello@brandwox.com"
                          className="text-foreground font-medium hover:text-accent transition-colors text-sm sm:text-base break-all"
                        >
                          hello@brandwox.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Business Hours
                        </div>
                        <div className="text-foreground font-medium text-sm sm:text-base">
                          Mon - Fri: 9am - 6pm GMT
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Location
                        </div>
                        <div className="text-foreground font-medium text-sm sm:text-base">
                          United Kingdom
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Serving dealers nationwide
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-muted/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    🇬🇧 Proudly serving{" "}
                    <span className="text-foreground font-medium">
                      50+ UK car dealers
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <MobileFooter />
      </main>
    </PageTransition>
  );
};

export default ContactUs;
