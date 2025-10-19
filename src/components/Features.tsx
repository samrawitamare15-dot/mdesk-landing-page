import { Car, Users, MapPin, Route, UserCircle2, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Car,
    title: 'Vehicles',
    description: 'Track and manage your entire fleet with real-time monitoring and maintenance schedules.',
  },
  {
    icon: UserCircle2,
    title: 'Drivers',
    description: 'Monitor driver performance, assignments, and ensure compliance with regulations.',
  },
  {
    icon: MapPin,
    title: 'GPS Tracking',
    description: 'Live location tracking with detailed route history and geofencing capabilities.',
  },
  {
    icon: Route,
    title: 'Routes',
    description: 'Optimize delivery routes, reduce fuel costs, and improve efficiency.',
  },
  {
    icon: Users,
    title: 'Clients',
    description: 'Manage client relationships and delivery schedules in one centralized system.',
  },
  {
    icon: FileText,
    title: 'Reports & Settings',
    description: 'Comprehensive analytics and customizable settings for your fleet operations.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Everything You Need to Manage Your Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your operations and maximize efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
