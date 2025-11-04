'use client';

import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { FeatureCard } from "./components/FeatureCard";
import { MetricCard } from "./components/MetricCard";
import { RoadmapCard } from "./components/RoadmapCard";
import { ContactForm } from "./components/ContactForm";
import { CaptureInterface } from "./components/CaptureInterface";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import {
  Box,
  TrendingUp,
  MessageSquare,
  FileText,
  Shield,
  Users,
  CheckCircle2,
  Lock,
  Layers,
  Target,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  Rocket,
  Download,
} from "lucide-react";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 80;
    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              {/* Powered by + logo row */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span
                    className="text-caption"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Powered by
                  </span>

                  <div
                    className="px-3 py-1.5"
                    style={{
                      backgroundColor: "var(--neutral-light)",
                      borderRadius: "var(--radius-sm)",
                      border: "1.5px solid var(--brand-teal)",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        color: "var(--brand-navy)",
                        fontSize: "14px",
                      }}
                    >
                      MediMorphAI
                    </span>
                  </div>

                  {/* MediMorphAI logo (PNG in /public/brand/medi-morph-ai.png) */}
                  <Image
                    src="/brand/medi-morph-ai.png"
                    alt="MediMorphAI logo"
                    width={240}
                    height={120}
                    priority
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
                    className="h-12 sm:h-14 md:h-16 w-auto select-none drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                  />
                </div>
              </div>

              <h1 className="mb-6" style={{ color: "var(--text-primary)" }}>
                AI-assisted wound measurement and documentation—built for
                clinicians.
              </h1>

              <p
                className="mb-8"
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "var(--text-secondary)",
                  maxWidth: "560px",
                }}
              >
                3D wound modeling, trend analytics, and explainable guidance
                that fit existing workflows.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="text-white hover:opacity-90 hover:translate-y-[-1px] transition-all"
                  style={{
                    backgroundColor: "var(--brand-navy)",
                    borderRadius: "var(--radius-lg)",
                    height: "48px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    boxShadow: "0 2px 8px rgba(17, 45, 79, 0.15)",
                  }}
                >
                  Request Early Access
                </Button>
                <Button
                  onClick={() => scrollToSection("product")}
                  variant="outline"
                  style={{
                    borderColor: "var(--brand-blue)",
                    color: "var(--brand-blue)",
                    borderRadius: "var(--radius-lg)",
                    height: "48px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                  }}
                  className="hover:bg-[var(--neutral-light)] transition-colors"
                >
                  See Product Overview
                </Button>
              </div>

              <div
                className="p-4 inline-block"
                style={{
                  backgroundColor: "rgba(251, 217, 166, 0.1)",
                  border: "1px solid var(--accent-sun)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <p
                  className="text-caption"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Under development; not for diagnostic use.
                </p>
              </div>
            </div>

            {/* Right Column - Product Visual */}
            <div className="relative w-full max-w-[560px] sm:max-w-[600px] xl:max-w-[640px] mx-auto lg:ml-auto">
              <CaptureInterface />
            </div>
          </div>
        </div>
      </section>

      {/* MediMorphAI Product Section */}
      <section
        id="product"
        className="py-20 px-6"
        style={{ backgroundColor: "var(--neutral-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span
                className="text-caption"
                style={{ color: "var(--text-muted)" }}
              >
                Introducing
              </span>

              <div
                className="px-3 py-1.5"
                style={{
                  backgroundColor: "white",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--brand-teal)",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    color: "var(--brand-navy)",
                    fontSize: "14px",
                  }}
                >
                  MediMorphAI
                </span>
              </div>

              {/* MediMorphAI logo beside the badge */}
              <Image
                src="/brand/medi-morph-ai.png"
                alt="MediMorphAI logo"
                width={440}
                height={220}
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 400px"
                className="hidden sm:inline-block h-20 sm:h-24 md:h-28 w-auto select-none align-middle"
              />
            </div>

            <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
              Clinical-Grade Tools for Wound Care
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "var(--text-secondary)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Designed to reduce burden, improve measurement consistency, and
              support better outcomes—without replacing professional judgment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Box}
              title="3D Wound Modeling"
              description="Automated surface and volume estimates to reduce measurement variance."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Analytics & Trends"
              description="Longitudinal views, risk flags, and response-to-care tracking."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Conversational Intake"
              description="Patient Q&A transformed into structured, chart-ready output."
            />
            <FeatureCard
              icon={FileText}
              title="EHR-Ready Exports"
              description="FHIR-friendly, CSV/JSON formats to minimize double-charting."
            />
            <FeatureCard
              icon={Shield}
              title="Privacy & Security"
              description="HIPAA-aligned design, encryption, RBAC, and audit logging."
            />
            <FeatureCard
              icon={Users}
              title="Clinician-in-the-Loop"
              description="Transparent guidance with citations and override capability."
            />
          </div>

          {/* Workflow Steps */}
          <div className="mt-16">
            <h3 className="text-center mb-8" style={{ color: "var(--text-primary)" }}>
              How MediMorphAI Fits Your Workflow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card
                className="p-6 border text-center"
                style={{
                  borderRadius: "var(--radius-md)",
                  borderColor: "var(--color-border)",
                  backgroundColor: "white",
                }}
              >
                <div
                  className="mx-auto mb-4 flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--brand-navy)",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  1
                </div>
                <h4 className="mb-2" style={{ color: "var(--text-primary)" }}>
                  Capture
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Bedside image capture with guided positioning
                </p>
              </Card>

              <Card
                className="p-6 border text-center"
                style={{
                  borderRadius: "var(--radius-md)",
                  borderColor: "var(--color-border)",
                  backgroundColor: "white",
                }}
              >
                <div
                  className="mx-auto mb-4 flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--brand-blue)",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  2
                </div>
                <h4 className="mb-2" style={{ color: "var(--text-primary)" }}>
                  Compute
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Automated metrics and wound characterization
                </p>
              </Card>

              <Card
                className="p-6 border text-center"
                style={{
                  borderRadius: "var(--radius-md)",
                  borderColor: "var(--color-border)",
                  backgroundColor: "white",
                }}
              >
                <div
                  className="mx-auto mb-4 flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--brand-teal)",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  3
                </div>
                <h4 className="mb-2" style={{ color: "var(--text-primary)" }}>
                  Review
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Clinician review and approval with override options
                </p>
              </Card>

              <Card
                className="p-6 border text-center"
                style={{
                  borderRadius: "var(--radius-md)",
                  borderColor: "var(--color-border)",
                  backgroundColor: "white",
                }}
              >
                <div
                  className="mx-auto mb-4 flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--brand-blue-2)",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  4
                </div>
                <h4 className="mb-2" style={{ color: "var(--text-primary)" }}>
                  Export
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Direct integration with EHR systems
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Section */}
      <section id="clinical" className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
              Clinical Evidence Plan
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "var(--text-secondary)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Rigorous validation with partner sites to ensure clinical fit and
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <Card
              className="p-8 border"
              style={{
                borderRadius: "var(--radius-md)",
                borderColor: "var(--color-border)",
                backgroundColor: "white",
              }}
            >
              <h3 className="mb-6" style={{ color: "var(--text-primary)" }}>
                Clinical Fit & Evidence
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="flex-shrink-0"
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "var(--success-600)",
                      marginTop: "2px",
                      strokeWidth: 2,
                    }}
                  />
                  <div>
                    <div
                      className="mb-1"
                      style={{ fontWeight: 600, color: "var(--text-primary)" }}
                    >
                      Workflow Integration
                    </div>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Bedside capture → metrics → draft note → review → export
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="flex-shrink-0"
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "var(--success-600)",
                      marginTop: "2px",
                      strokeWidth: 2,
                    }}
                  />
                  <div>
                    <div
                      className="mb-1"
                      style={{ fontWeight: 600, color: "var(--text-primary)" }}
                    >
                      Validation Focus
                    </div>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Measurement consistency, documentation time, workflow fit
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="flex-shrink-0"
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "var(--success-600)",
                      marginTop: "2px",
                      strokeWidth: 2,
                    }}
                  />
                  <div>
                    <div
                      className="mb-1"
                      style={{ fontWeight: 600, color: "var(--text-primary)" }}
                    >
                      Target Settings
                    </div>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Wound centers, inpatient consults, VA/DoD, SNF
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Right Column */}
            <Card
              className="p-8 border"
              style={{
                borderRadius: "var(--radius-md)",
                borderColor: "var(--color-border)",
                backgroundColor: "var(--neutral-light)",
              }}
            >
              <h3 className="mb-6" style={{ color: "var(--text-primary)" }}>
                Pilot Metrics (Targets)
              </h3>

              <div className="space-y-3">
                <MetricCard metric="10–15s median sizing time" description="Target" />
                <MetricCard
                  metric="↓ measurement variance vs. manual"
                  description="Compared to standard ruler/wound measurement tools"
                />
                <MetricCard
                  metric="↓ double-charting minutes"
                  description="Reduced documentation burden"
                />
                <MetricCard
                  metric="Case studies after validation"
                  description="Partner site outcomes"
                />
              </div>

              <p
                className="text-caption mt-6 pt-6"
                style={{
                  color: "var(--text-muted)",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                Illustrative targets; finalize with partner sites & IRB.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section
        id="roadmap"
        className="py-20 px-6"
        style={{ backgroundColor: "var(--neutral-light)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
              Development Roadmap
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "var(--text-secondary)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Decision-grade milestones toward clinical validation and market
              access. Exit criteria guide each phase transition.
            </p>
          </div>

          {/* Roadmap Cards with Connectors */}
          <div className="relative">
            {/* Desktop Connector Line */}
            <div
              className="hidden lg:block absolute top-12 left-0 right-0 h-0.5"
              style={{
                background:
                  "repeating-linear-gradient(to right, var(--color-border) 0, var(--color-border) 8px, transparent 8px, transparent 16px)",
                zIndex: 0,
                marginLeft: "5%",
                marginRight: "5%",
              }}
            >
              {/* Waypoint Dots */}
              {["0%", "33.33%", "66.66%", "100%"].map((left) => (
                <div
                  key={left}
                  className="absolute"
                  style={{
                    left,
                    top: "-3px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--brand-teal)",
                  }}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              <RoadmapCard
                phase="PHASE 1"
                title="Now (Alpha)"
                timing="~8–12 weeks"
                icon={Wrench}
                badge="Alpha"
                swimlanes={["Technical", "Clinical"]}
                progress={65}
                focus="Bench + synthetic/phantom validation; core UX hardening; design inputs drafted."
                exitCriteria="Measurement workflow stable; preliminary variance targets set; pilot LOIs gathered."
                deliverables={[
                  "Synthetic wound test protocol completed",
                  "Core capture & compute workflow validated",
                  "Initial design inputs documented",
                ]}
              />

              <RoadmapCard
                phase="PHASE 2"
                title="Near Term (Pilot Prep)"
                timing="~Q2–Q3 2025"
                icon={ClipboardCheck}
                badge="Pilot"
                swimlanes={["Clinical", "Regulatory"]}
                progress={30}
                focus="IRB/ethics package, DUA/BAA, design controls kickoff, data mgmt & de-ID SOPs, IFU v0.5."
                exitCriteria="Site onboarding complete; training plan approved; pilot protocol ready to execute."
                deliverables={[
                  "IRB submissions & approvals secured",
                  "Partner site agreements executed",
                  "Training materials & IFU v0.5 finalized",
                ]}
                deepLink={{ text: "View pilot overview", href: "#clinical" }}
              />

              <RoadmapCard
                phase="PHASE 3"
                title="Regulatory (Validation)"
                timing="~6–9 months"
                icon={ShieldCheck}
                swimlanes={["Clinical", "Regulatory"]}
                progress={10}
                focus="Multi-site observational data collection; V&V; predicate mapping for 510(k)."
                exitCriteria="Pre-specified endpoints met; V&V report; submission dossier assembled."
                deliverables={[
                  "Clinical validation data collected",
                  "V&V testing completed",
                  "510(k) submission prepared",
                ]}
                deepLink={{
                  text: "Learn about validation endpoints",
                  href: "#clinical",
                }}
              />

              <RoadmapCard
                phase="PHASE 4"
                title="Launch (Early Access)"
                timing="Post-clearance"
                icon={Rocket}
                badge="Launch"
                swimlanes={["Commercial", "Clinical"]}
                progress={0}
                focus="Early access cohorts; reference sites; support/readiness; post-market surveillance plan."
                exitCriteria="Go-live checklist passed; support SLAs in place; PMCF/PMS plan active."
                deliverables={[
                  "Reference site deployments live",
                  "Support infrastructure operational",
                  "Post-market surveillance initiated",
                ]}
              />
            </div>
          </div>

          {/* Download Link */}
          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 transition-colors hover:opacity-70"
              style={{
                fontSize: "13px",
                color: "var(--brand-blue)",
                fontWeight: 500,
              }}
            >
              <Download style={{ width: "14px", height: "14px" }} />
              Download roadmap one-pager (PDF)
            </a>
          </div>

          {/* Compliance Footer */}
          <div
            className="mt-10 p-4"
            style={{
              backgroundColor: "white",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="space-y-1 text-caption"
              style={{ color: "var(--text-muted)" }}
            >
              <p>• Timeline is illustrative; regulatory clearance not yet obtained.</p>
              <p>• No patient data shown.</p>
              <p>
                • Performance metrics represent targets pending validation; no efficacy
                claims until clinical studies complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
              About Inovasity
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "var(--text-secondary)",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              We're building assistive AI tools to reduce clinician burden, improve
              measurement consistency, and support better patient outcomes—without
              replacing professional judgment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="p-6 border text-center"
              style={{
                borderRadius: "var(--radius-md)",
                borderColor: "var(--color-border)",
                backgroundColor: "white",
              }}
            >
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--brand-teal)",
                }}
              >
                <Layers
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "var(--brand-navy)",
                    strokeWidth: 1.5,
                  }}
                />
              </div>
              <h3 className="mb-2" style={{ color: "var(--text-primary)" }}>
                Interoperable
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Built to fit existing systems and workflows
              </p>
            </Card>

            <Card
              className="p-6 border text-center"
              style={{
                borderRadius: "var(--radius-md)",
                borderColor: "var(--color-border)",
                backgroundColor: "white",
              }}
            >
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--brand-teal)",
                }}
              >
                <FileText
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "var(--brand-navy)",
                    strokeWidth: 1.5,
                  }}
                />
              </div>
              <h3 className="mb-2" style={{ color: "var(--text-primary)" }}>
                Explainable
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Transparent outputs with traceable reasoning
              </p>
            </Card>

            <Card
              className="p-6 border text-center"
              style={{
                borderRadius: "var(--radius-md)",
                borderColor: "var(--color-border)",
                backgroundColor: "white",
              }}
            >
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--brand-teal)",
                }}
              >
                <Lock
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "var(--brand-navy)",
                    strokeWidth: 1.5,
                  }}
                />
              </div>
              <h3 className="mb-2" style={{ color: "var(--text-primary)" }}>
                Secure
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                HIPAA-aligned architecture and data handling
              </p>
            </Card>

            <Card
              className="p-6 border text-center"
              style={{
                borderRadius: "var(--radius-md)",
                borderColor: "var(--color-border)",
                backgroundColor: "white",
              }}
            >
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--brand-teal)",
                }}
              >
                <Target
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "var(--brand-navy)",
                    strokeWidth: 1.5,
                  }}
                />
              </div>
              <h3 className="mb-2" style={{ color: "var(--text-primary)" }}>
                Partner-Driven
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Co-developed with frontline clinicians
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 px-6"
        style={{ backgroundColor: "var(--neutral-light)" }}
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="px-6"
              style={{
                backgroundColor: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <AccordionTrigger
                className="hover:no-underline"
                style={{ color: "var(--text-primary)" }}
              >
                Is this a medical device?
              </AccordionTrigger>
              <AccordionContent style={{ color: "var(--text-secondary)" }}>
                We are pursuing the appropriate regulatory pathway for our intended
                use. The system is not currently cleared for diagnostic use and is
                intended to assist, not replace, professional clinical judgment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="px-6"
              style={{
                backgroundColor: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <AccordionTrigger
                className="hover:no-underline"
                style={{ color: "var(--text-primary)" }}
              >
                Will it replace clinicians?
              </AccordionTrigger>
              <AccordionContent style={{ color: "var(--text-secondary)" }}>
                No. Our tools are assistive only and require professional oversight.
                We believe the best outcomes come from combining clinical expertise
                with computational support—not replacing human judgment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="px-6"
              style={{
                backgroundColor: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <AccordionTrigger
                className="hover:no-underline"
                style={{ color: "var(--text-primary)" }}
              >
                What data do you store?
              </AccordionTrigger>
              <AccordionContent style={{ color: "var(--text-secondary)" }}>
                We collect only the minimum data necessary for system function.
                De-identification is supported where appropriate. Protected Health
                Information (PHI) is handled only under proper Business Associate
                Agreements and security controls aligned with HIPAA requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="px-6"
              style={{
                backgroundColor: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <AccordionTrigger
                className="hover:no-underline"
                style={{ color: "var(--text-primary)" }}
              >
                Can you share algorithm details?
              </AccordionTrigger>
              <AccordionContent style={{ color: "var(--text-secondary)" }}>
                For IP and regulatory reasons, we do not publish implementation
                details, model architectures, or training pipelines. We focus on
                transparent outputs and clinical validation rather than disclosing
                proprietary methods.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="px-6"
              style={{
                backgroundColor: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <AccordionTrigger
                className="hover:no-underline"
                style={{ color: "var(--text-primary)" }}
              >
                How can I participate in a pilot?
              </AccordionTrigger>
              <AccordionContent style={{ color: "var(--text-secondary)" }}>
                We're currently identifying partner sites for clinical validation.
                If you represent a wound center, hospital, VA/DoD facility, or SNF
                and are interested in collaboration, please reach out via the
                contact form below.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="px-6"
              style={{
                backgroundColor: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <AccordionTrigger
                className="hover:no-underline"
                style={{ color: "var(--text-primary)" }}
              >
                What's your approach to bias and fairness?
              </AccordionTrigger>
              <AccordionContent style={{ color: "var(--text-secondary)" }}>
                We're committed to developing systems that work equitably across
                diverse patient populations. Our validation plan includes assessment
                of performance across different skin tones, wound types, and care
                settings to identify and mitigate potential disparities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
              Get in Touch
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "var(--text-secondary)",
              }}
            >
              Interested in early access or partnership? We'd love to hear from
              you.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6"
        style={{
          borderTop: "1px solid var(--color-border)",
          backgroundColor: "var(--brand-navy)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* LEFT COLUMN: brand */}
            <div>
              {/* Wordmark */}
              <Link href="/" aria-label="Inovasity home" className="inline-flex items-center mb-4">
                <Image
                  src="/brand/inovasity-logo.png"
                  alt="Inovasity"
                  width={220}
                  height={48}
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 220px"
                  className="h-10 sm:h-11 w-auto select-none"
                />
              </Link>

              <p className="text-caption" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                AI-assisted clinical tools for wound care.
              </p>

              {/* Powered by MediMorphAI */}
              <div
                className="mt-4 inline-flex items-center gap-3 px-3 py-1.5 rounded-md border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <span className="text-caption" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Powered by
                </span>
                <Image
                  src="/brand/medi-morph-ai.png"
                  alt="MediMorphAI"
                  width={160}
                  height={80}
                  sizes="(max-width: 640px) 120px, 160px"
                  className="h-8 w-auto select-none"
                />
              </div>
            </div>


            <div>
              <h4 className="mb-3" style={{ color: "white" }}>
                Resources
              </h4>
              <div className="space-y-2">
                <a
                  href="#product"
                  className="block transition-colors hover:underline"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Product
                </a>
                <a
                  href="#clinical"
                  className="block transition-colors hover:underline"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Clinical Evidence
                </a>
                <a
                  href="#roadmap"
                  className="block transition-colors hover:underline"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Roadmap
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-3" style={{ color: "white" }}>
                Legal
              </h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block transition-colors hover:underline"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block transition-colors hover:underline"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Terms of Service
                </a>
                <a
                  href="#contact"
                  className="block transition-colors hover:underline"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div
            className="pt-8"
            style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
          >
            <div
              className="space-y-2 text-caption"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              <p>• Under development; not for diagnostic use.</p>
              <p>• Forward-looking statements are subject to change.</p>
              <p>• Do not submit PHI through this website.</p>
              <p className="pt-4">© 2025 Inovasity. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
