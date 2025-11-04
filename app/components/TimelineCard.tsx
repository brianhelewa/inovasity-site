import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface TimelineCardProps {
  phase: string;
  title: string;
  description: string;
  badge?: string;
}

export function TimelineCard({ phase, title, description, badge }: TimelineCardProps) {
  return (
    <Card 
      className="p-6 border relative"
      style={{ 
        borderRadius: 'var(--radius-md)',
        borderColor: 'var(--color-border)',
        backgroundColor: 'white'
      }}
    >
      {badge && (
        <Badge 
          className="absolute top-4 right-4 border-0"
          style={{ 
            backgroundColor: 'transparent',
            color: 'var(--brand-teal)',
            border: '1.5px solid var(--brand-teal)',
            fontSize: 'var(--text-caption)'
          }}
        >
          {badge}
        </Badge>
      )}
      <div className="text-caption mb-2" style={{ color: 'var(--text-muted)' }}>
        {phase}
      </div>
      <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
    </Card>
  );
}
