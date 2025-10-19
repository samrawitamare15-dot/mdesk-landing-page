import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              About MDESK
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          </div>

          <div className="space-y-8 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              MDESK is a comprehensive fleet management solution designed to simplify the complexities
              of managing vehicles, drivers, and routes. Our platform brings together all the essential
              tools you need to run an efficient, profitable fleet operation.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Built with modern technology and user-friendly interfaces, MDESK empowers fleet managers
              to make data-driven decisions, reduce operational costs, and improve service delivery.
              Whether you're managing a small delivery fleet or a large transportation network, MDESK
              scales with your business needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                'Real-time GPS tracking',
                'Automated maintenance alerts',
                'Driver performance monitoring',
                'Route optimization',
                'Comprehensive reporting',
                'Mobile-friendly interface',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
