'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle, 
  Globe, 
  Users, 
  Lock, 
  FileText,
  Server,
  Clock,
  Building2,
  Award
} from "lucide-react";
import { toast } from "sonner";

const Home = () => {

  const handleClick = () => {
    toast("🚧Feature Under progress")
  }
  return (
    <main className="min-h-screen">
      {/* Hero Section with Abstract Background */}
      <section className="relative px-4 py-32 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-8 text-primary">
            Trusted by some of the best platforms
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Enterprise Cloud Storage
            <span className="block text-primary mt-2">Reimagined</span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-600">
            Military-grade encryption meets intuitive design. Store, manage, and share your data
            with confidence across global infrastructure.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="text-lg px-8 h-12" onClick={handleClick}>
              Start your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-12" onClick={handleClick} >
              Contact us
            </Button>
          </div>
          
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'Active Users', value: '100,000+' },
              { label: 'Data Stored', value: '5+ PB' },
              { label: 'Uptime', value: '99.99%' },
              { label: 'Global CDN Points', value: '150+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Tabs Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Enterprise-Grade Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need for secure and efficient cloud storage
            </p>
          </div>
          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            </TabsList>
            <TabsContent value="security" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Lock,
                    title: "End-to-End Encryption",
                    description: "AES-256 encryption at rest and in transit"
                  },
                  {
                    icon: Shield,
                    title: "Compliance Ready",
                    description: "GDPR, HIPAA, and SOC 2 Type II compliant"
                  },
                  {
                    icon: Users,
                    title: "Access Control",
                    description: "Granular permissions and role-based access"
                  }
                ].map((feature) => (
                  <Card key={feature.title} className="p-6">
                    <feature.icon className="h-12 w-12 text-primary" />
                    <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="performance" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Fast Transfer",
                    description: "Multi-part uploads with resume capability"
                  },
                  {
                    icon: Globe,
                    title: "Global CDN",
                    description: "Edge locations for faster content delivery"
                  },
                  {
                    icon: Server,
                    title: "Auto Scaling",
                    description: "Dynamic resource allocation on demand"
                  }
                ].map((feature) => (
                  <Card key={feature.title} className="p-6">
                    <feature.icon className="h-12 w-12 text-primary" />
                    <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="collaboration" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Team Workspace",
                    description: "Collaborative spaces for team projects"
                  },
                  {
                    icon: Clock,
                    title: "Version Control",
                    description: "File versioning and history tracking"
                  },
                  {
                    icon: FileText,
                    title: "Audit Logs",
                    description: "Detailed activity and access logs"
                  }
                ].map((feature) => (
                  <Card key={feature.title} className="p-6">
                    <feature.icon className="h-12 w-12 text-primary" />
                    <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Enterprise Solutions</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Tailored for Your Business Needs
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Building2,
                    title: "Custom Implementation",
                    description: "Dedicated support for enterprise deployment"
                  },
                  {
                    icon: Shield,
                    title: "Advanced Security",
                    description: "Custom security policies and compliance"
                  },
                  {
                    icon: Award,
                    title: "SLA Guarantee",
                    description: "99.99% uptime with 24/7 support"
                  }
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-8" onClick={handleClick}>Contact Sales</Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cloud className="h-32 w-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl font-bold">Choose Your Plan</h2>
            <p className="mt-4 text-lg text-gray-600">
              Flexible plans for businesses of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: 'Free',
                features: [
                  '10GB Storage',
                  'Basic Security',
                  '5 Team Members',
                  'Email Support'
                ]
              },
              {
                name: 'Business',
                price: '$29',
                popular: true,
                features: [
                  '1TB Storage',
                  'Advanced Security',
                  'Unlimited Team Members',
                  '24/7 Support',
                  'API Access'
                ]
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: [
                  'Unlimited Storage',
                  'Custom Security',
                  'Dedicated Support',
                  'Custom Integration',
                  'SLA Guarantee'
                ]
              }
            ].map((plan) => (
              <Card key={plan.name} className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute top-4 right-4">Popular</Badge>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 text-4xl font-bold">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg font-normal">/mo</span>}
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="mt-8 w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={handleClick}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default Home;







