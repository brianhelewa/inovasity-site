import { Card } from "./ui/card";

interface MetricCardProps {
  metric: string;
  description: string;
}

export function MetricCard({ metric, description }: MetricCardProps) {
  return (
    <div 
      className="flex items-start gap-3 p-4"
      style={{ 
        backgroundColor: 'white',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--color-border)'
      }}
    >
      <div 
        className="flex-shrink-0"
        style={{ 
          width: '6px', 
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-sun)',
          marginTop: '8px'
        }}
      />
      <div>
        <div style={{ 
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '4px'
        }}>{metric}</div>
        <div className="text-caption" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </div>
      </div>
    </div>
  );
}
