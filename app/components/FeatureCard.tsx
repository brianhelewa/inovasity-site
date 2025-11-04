import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card 
      className="p-6 border transition-shadow duration-200 hover:shadow-[var(--shadow-elevation)]"
      style={{ 
        borderRadius: 'var(--radius-md)',
        borderColor: 'var(--color-border)',
        backgroundColor: 'white'
      }}
    >
      <div 
        className="flex items-center justify-center mb-4"
        style={{ 
          width: '48px', 
          height: '48px',
          borderRadius: 'var(--radius-sm)',
          border: '1.5px solid var(--brand-teal)',
          backgroundColor: 'transparent'
        }}
      >
        <Icon style={{ 
          width: '24px', 
          height: '24px',
          color: 'var(--brand-navy)',
          strokeWidth: 1.5
        }} />
      </div>
      <h3 style={{ 
        marginBottom: '8px',
        color: 'var(--text-primary)'
      }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
    </Card>
  );
}
