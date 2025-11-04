import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { LucideIcon, ChevronDown, ChevronUp } from "lucide-react";

interface RoadmapCardProps {
  phase: string;
  title: string;
  timing: string;
  focus: string;
  exitCriteria: string;
  badge?: string;
  icon: LucideIcon;
  swimlanes: string[];
  progress: number;
  deliverables?: string[];
  deepLink?: {
    text: string;
    href: string;
  };
}

export function RoadmapCard({ 
  phase, 
  title, 
  timing,
  focus,
  exitCriteria,
  badge, 
  icon: Icon,
  swimlanes,
  progress,
  deliverables,
  deepLink
}: RoadmapCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className="border relative group transition-all duration-200 hover:shadow-[var(--shadow-elevation)]"
      style={{ 
        borderRadius: 'var(--radius-md)',
        borderColor: 'var(--color-border)',
        backgroundColor: 'white'
      }}
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="flex items-center justify-center flex-shrink-0"
              style={{ 
                width: '40px', 
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--brand-teal)',
                backgroundColor: 'transparent'
              }}
            >
              <Icon style={{ 
                width: '20px', 
                height: '20px',
                color: 'var(--brand-navy)',
                strokeWidth: 1.5
              }} />
            </div>
            <div>
              <div className="text-caption mb-1" style={{ color: 'var(--text-muted)' }}>
                {phase}
              </div>
              <h3 style={{ 
                color: 'var(--text-primary)',
                marginBottom: '4px'
              }}>
                {title}
              </h3>
            </div>
          </div>
          
          {badge && (
            <Badge 
              className="border-0 flex-shrink-0"
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
        </div>

        {/* Timing */}
        <div 
          className="inline-block px-2 py-1 mb-4"
          style={{ 
            backgroundColor: 'var(--neutral-light)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '12px',
            color: 'var(--text-muted)',
            fontWeight: 500
          }}
        >
          {timing}
        </div>

        {/* Swimlane Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {swimlanes.map((lane) => (
            <span
              key={lane}
              className="px-2 py-1"
              style={{ 
                backgroundColor: 'white',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '11px',
                color: 'var(--text-secondary)',
                fontWeight: 500
              }}
            >
              {lane}
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span style={{ 
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontWeight: 500
            }}>
              Progress
            </span>
            <span style={{ 
              fontSize: '11px',
              color: 'var(--brand-navy)',
              fontWeight: 600
            }}>
              {progress}%
            </span>
          </div>
          <Progress 
            value={progress} 
            className="h-1.5"
            style={{
              backgroundColor: 'var(--neutral-light)'
            }}
          />
        </div>

        {/* Focus */}
        <div className="mb-4">
          <div style={{ 
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '6px'
          }}>
            Focus
          </div>
          <p style={{ 
            fontSize: '14px',
            lineHeight: '20px',
            color: 'var(--text-secondary)'
          }}>
            {focus}
          </p>
        </div>

        {/* Exit Criteria */}
        <div 
          className="p-3 mb-4"
          style={{ 
            backgroundColor: 'var(--neutral-light)',
            borderRadius: 'var(--radius-sm)',
            borderLeft: '3px solid var(--brand-teal)'
          }}
        >
          <div style={{ 
            fontSize: '12px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Exit Criteria
          </div>
          <p style={{ 
            fontSize: '13px',
            lineHeight: '18px',
            color: 'var(--text-secondary)'
          }}>
            {exitCriteria}
          </p>
        </div>

        {/* Deliverables - Expandable */}
        {deliverables && (
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 w-full transition-colors hover:opacity-70"
              style={{ 
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--brand-blue)',
                marginBottom: isExpanded ? '8px' : '0'
              }}
            >
              What we'll deliver
              {isExpanded ? (
                <ChevronUp style={{ width: '14px', height: '14px' }} />
              ) : (
                <ChevronDown style={{ width: '14px', height: '14px' }} />
              )}
            </button>
            
            {isExpanded && (
              <ul className="space-y-1.5 mt-2">
                {deliverables.map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-2"
                    style={{ 
                      fontSize: '13px',
                      lineHeight: '18px',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <span style={{ color: 'var(--brand-teal)' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Deep Link */}
        {deepLink && (
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
            <a
              href={deepLink.href}
              className="inline-flex items-center gap-1 transition-colors hover:underline"
              style={{ 
                fontSize: '13px',
                color: 'var(--brand-blue)',
                fontWeight: 500
              }}
            >
              {deepLink.text}
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}
