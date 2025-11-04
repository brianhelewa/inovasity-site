import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", organization: "", role: "", message: "" });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      <Alert 
        className="mb-6"
        style={{ 
          borderColor: 'var(--warning-600)',
          backgroundColor: 'rgba(217, 119, 6, 0.05)'
        }}
      >
        <AlertTriangle style={{ 
          height: '16px', 
          width: '16px', 
          color: 'var(--warning-600)' 
        }} />
        <AlertDescription style={{ color: 'var(--text-secondary)' }}>
          Do not include PHI (Protected Health Information) in this form.
        </AlertDescription>
      </Alert>

      {submitted && (
        <Alert 
          className="mb-6"
          style={{ 
            borderColor: 'var(--success-600)',
            backgroundColor: 'rgba(22, 163, 74, 0.05)'
          }}
        >
          <CheckCircle2 style={{ 
            height: '16px', 
            width: '16px', 
            color: 'var(--success-600)' 
          }} />
          <AlertDescription style={{ color: 'var(--text-secondary)' }}>
            Thank you for your interest. We'll be in touch soon.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-2"
            style={{ 
              backgroundColor: 'var(--neutral-light)',
              borderColor: 'var(--color-border)'
            }}
          />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-2"
            style={{ 
              backgroundColor: 'var(--neutral-light)',
              borderColor: 'var(--color-border)'
            }}
          />
        </div>

        <div>
          <Label htmlFor="organization">Organization *</Label>
          <Input
            id="organization"
            required
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="mt-2"
            style={{ 
              backgroundColor: 'var(--neutral-light)',
              borderColor: 'var(--color-border)'
            }}
          />
        </div>

        <div>
          <Label htmlFor="role">Role *</Label>
          <Input
            id="role"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="mt-2"
            style={{ 
              backgroundColor: 'var(--neutral-light)',
              borderColor: 'var(--color-border)'
            }}
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-2"
            style={{ 
              backgroundColor: 'var(--neutral-light)',
              borderColor: 'var(--color-border)'
            }}
          />
        </div>

        <Button
          type="submit"
          className="w-full text-white hover:opacity-90 transition-opacity"
          style={{ 
            backgroundColor: 'var(--brand-navy)',
            borderRadius: 'var(--radius-lg)',
            height: '48px'
          }}
        >
          Submit Request
        </Button>
      </form>

      <div 
        className="mt-6 pt-6"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <p className="text-caption mb-2" style={{ color: 'var(--text-muted)' }}>
          Or email:
        </p>
        <a 
          href="mailto:brian.helewa@inovasity.io" 
          className="hover:underline"
          style={{ color: 'var(--brand-blue)' }}
        >
          brian.helewa@inovasity.io
        </a>
      </div>
    </div>
  );
}
