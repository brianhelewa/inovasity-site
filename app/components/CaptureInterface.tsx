import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Camera, 
  Image as ImageIcon, 
  RotateCw, 
  CheckCircle2, 
  AlertTriangle, 
  Sun, 
  Gauge,
  HelpCircle,
  Eye,
  Layers,
  Ruler,
  FileText
} from "lucide-react";

type CaptureState = "pre-capture" | "capturing" | "post-capture";

type CaptureInterfaceProps = {
    className?: string;
  };

export function CaptureInterface({ className }: CaptureInterfaceProps) {
  const [state, setState] = useState<CaptureState>("pre-capture");
  const [captureProgress, setCaptureProgress] = useState(0);
  const [show3DOverlay, setShow3DOverlay] = useState(false);

  const handleCapture = () => {
    setState("capturing");
    setCaptureProgress(0);
    
    // Simulate capture progress
    const interval = setInterval(() => {
      setCaptureProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setState("post-capture"), 300);
          return 100;
        }
        return prev + 14.3; // 7 steps
      });
    }, 400);
  };

  const handleRetake = () => {
    setState("pre-capture");
    setCaptureProgress(0);
    setShow3DOverlay(false);
  };

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{
        backgroundColor: 'var(--neutral-light)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        // remove any fixed widths; let parent control size
      }}
    >
      {/* Header */}
      <div 
        className="p-4 flex items-center justify-between border-b"
        style={{ 
          backgroundColor: 'white',
          borderColor: 'var(--color-border)'
        }}
      >
        <div 
          className="px-3 py-1.5"
          style={{ 
            backgroundColor: 'var(--neutral-light)',
            borderRadius: 'var(--radius-sm)',
            border: '1.5px solid var(--brand-teal)'
          }}
        >
          <span style={{ 
            fontWeight: 600,
            color: 'var(--brand-navy)',
            fontSize: '14px'
          }}>MediMorphAI</span>
        </div>
        <div 
          className="px-2 py-1"
          style={{ 
            backgroundColor: 'var(--neutral-light)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-caption)',
            color: 'var(--brand-teal)',
            fontWeight: 600
          }}
        >
          Alpha
        </div>
      </div>

      {/* Main Capture Area */}
      <div className="p-6">
        <div 
          className={`aspect-[4/3] relative flex items-center justify-center ${state === "post-capture" ? "max-w-[720px] mx-auto" : ""}`}
          style={{ 
            backgroundColor: state === "pre-capture" ? '#1a1a1a' : 'white',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            transition: 'background-color 300ms ease'
          }}
        >
          {/* PRE-CAPTURE STATE */}
          {state === "pre-capture" && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Camera Frame Effect */}
              <div className="absolute inset-8 border-2 border-dashed opacity-30" style={{ borderColor: 'white', borderRadius: '12px' }} />
              
              {/* Reticle Circle */}
              <div 
                className="relative flex items-center justify-center"
                style={{ 
                  width: '180px',
                  height: '180px',
                  border: '3px solid var(--brand-teal)',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px rgba(64, 142, 157, 0.3)'
                }}
              >
                <Camera style={{ width: '48px', height: '48px', color: 'var(--brand-teal)' }} />
                
                {/* Distance Indicator */}
                <div 
                  className="absolute -top-10 px-3 py-1.5 flex items-center gap-2"
                  style={{ 
                    backgroundColor: 'rgba(64, 142, 157, 0.9)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 500
                  }}
                >
                  <div 
                    style={{ 
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#FBD9A6'
                    }}
                  />
                  Optimal Distance
                </div>
              </div>

              {/* Helper Indicators */}
              <div className="absolute top-4 left-4 space-y-2">
                <div 
                  className="flex items-center gap-2 px-3 py-2"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'white'
                  }}
                >
                  <Sun style={{ width: '14px', height: '14px', color: '#FBD9A6' }} />
                  <span style={{ fontSize: '12px' }}>Lighting: Good</span>
                </div>
                <div 
                  className="flex items-center gap-2 px-3 py-2"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'white'
                  }}
                >
                  <Gauge style={{ width: '14px', height: '14px', color: '#FBD9A6' }} />
                  <span style={{ fontSize: '12px' }}>Stability: Ready</span>
                </div>
              </div>

              {/* Calibration Hint */}
              <div 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-2 text-center"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'white',
                  fontSize: '11px',
                  maxWidth: '80%'
                }}
              >
                Include a reference marker if available
              </div>
            </div>
          )}

          {/* CAPTURING STATE */}
          {state === "capturing" && (
            <div className="absolute inset-0 p-8">
              {/* Progress Dots */}
              <div className="flex justify-center gap-3 mb-6">
                {[...Array(7)].map((_, idx) => (
                  <div
                    key={idx}
                    style={{ 
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: captureProgress > idx * 14.3 ? 'var(--brand-teal)' : 'var(--color-border)',
                      transition: 'all 200ms ease',
                      boxShadow: captureProgress > idx * 14.3 ? '0 0 8px rgba(64, 142, 157, 0.5)' : 'none'
                    }}
                  />
                ))}
              </div>

              <div className="text-center mb-6">
                <div style={{ 
                  fontSize: '14px',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  Capturing multi-view sweep...
                </div>
                <div style={{ 
                  fontSize: '12px',
                  color: 'var(--text-muted)'
                }}>
                  Move slowly in an arc around the area
                </div>
              </div>

              {/* Quality Indicators */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge 
                  className="border-0"
                  style={{ 
                    backgroundColor: 'rgba(22, 163, 74, 0.1)',
                    color: 'var(--success-600)',
                    border: '1px solid var(--success-600)'
                  }}
                >
                  <CheckCircle2 style={{ width: '12px', height: '12px', marginRight: '4px' }} />
                  Focus ✓
                </Badge>
                <Badge 
                  className="border-0"
                  style={{ 
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    color: 'var(--danger-600)',
                    border: '1px solid var(--danger-600)'
                  }}
                >
                  <AlertTriangle style={{ width: '12px', height: '12px', marginRight: '4px' }} />
                  Glare ✖
                </Badge>
                <Badge 
                  className="border-0"
                  style={{ 
                    backgroundColor: 'rgba(27, 94, 147, 0.1)',
                    color: 'var(--brand-blue)',
                    border: '1px solid var(--brand-blue)'
                  }}
                >
                  Coverage {Math.round(captureProgress)}%
                </Badge>
              </div>

              {/* Privacy Notice */}
              <div 
                className="mx-auto px-3 py-2 text-center"
                style={{ 
                  backgroundColor: 'var(--neutral-light)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  maxWidth: '300px'
                }}
              >
                De-identified Session ID: DEMO-001
              </div>
            </div>
          )}

          {/* POST-CAPTURE STATE */}
          {state === "post-capture" && (
        <div className="absolute inset-0 p-3">
            <div className="grid h-full max-w-[720px] mx-auto gap-3 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(240px,280px)]">
            {/* 3D Preview */}
            <div className="flex flex-col">
                <div
                className="flex-1 relative flex items-center justify-center"
                style={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-border)",
                }}
                >
                {/* 3D Visualization Placeholder */}
                <div className="text-center">
                    <div className="relative inline-block mb-4">
                    <Layers
                        style={{
                        width: "64px",
                        height: "64px",
                        color: "var(--brand-blue)",
                        strokeWidth: 1.5,
                        }}
                    />
                    <div
                        className="absolute -top-1 -right-1"
                        style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#FBD9A6",
                        boxShadow: "0 0 8px rgba(251, 217, 166, 0.6)",
                        }}
                    />
                    </div>
                    <div
                    style={{
                        fontSize: "14px",
                        color: "var(--text-muted)",
                        marginBottom: "12px",
                    }}
                    >
                    3D Model Preview
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                    Rotate • Pinch to zoom
                    </div>
                </div>

                {/* Overlay Toggles */}
                <div className="absolute top-2 left-2 flex gap-2">
                    <button
                    onClick={() => setShow3DOverlay(!show3DOverlay)}
                    className="px-2 py-1 transition-colors"
                    style={{
                        backgroundColor: show3DOverlay ? "var(--brand-blue)" : "white",
                        color: show3DOverlay ? "white" : "var(--text-secondary)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "11px",
                        fontWeight: 500,
                    }}
                    >
                    <Eye
                        style={{
                        width: "12px",
                        height: "12px",
                        display: "inline",
                        marginRight: "4px",
                        }}
                    />
                    Tissue Map
                    </button>
                </div>
                </div>

                {/* Controls */}
                <div
                className="mt-2 text-center text-caption"
                style={{ color: "var(--text-muted)" }}
                >
                Drag to rotate • Scroll to zoom
                </div>
            </div>

            {/* Metrics Panel (fixed-ish width at xl) */}
            <aside
                className="flex flex-col gap-3 w-full"
                style={{
                backgroundColor: "white",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-border)",
                padding: "16px",
                }}
            >
                <div
                style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                }}
                >
                Auto-Metrics
                </div>

                <div className="space-y-3">
                <div
                    className="flex items-center justify-between p-2"
                    style={{
                    backgroundColor: "var(--neutral-light)",
                    borderRadius: "var(--radius-sm)",
                    }}
                >
                    <div className="flex items-center gap-2">
                    <Ruler style={{ width: "14px", height: "14px", color: "var(--brand-blue)" }} />
                    <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                        Area
                    </span>
                    </div>
                    <span
                    style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                    }}
                    >
                    12.4 cm²
                    </span>
                </div>

                <div
                    className="flex items-center justify-between p-2"
                    style={{
                    backgroundColor: "var(--neutral-light)",
                    borderRadius: "var(--radius-sm)",
                    }}
                >
                    <div className="flex items-center gap-2">
                    <RotateCw style={{ width: "14px", height: "14px", color: "var(--brand-blue)" }} />
                    <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                        Perimeter
                    </span>
                    </div>
                    <span
                    style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                    }}
                    >
                    14.2 cm
                    </span>
                </div>

                <div
                    className="flex items-center justify-between p-2"
                    style={{
                    backgroundColor: "var(--neutral-light)",
                    borderRadius: "var(--radius-sm)",
                    }}
                >
                    <div className="flex items-center gap-2">
                    <Layers style={{ width: "14px", height: "14px", color: "var(--brand-blue)" }} />
                    <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                        Max Depth
                    </span>
                    </div>
                    <span
                    style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                    }}
                    >
                    0.8 cm
                    </span>
                </div>

                <div
                    className="flex items-center justify-between p-2"
                    style={{
                    backgroundColor: "var(--neutral-light)",
                    borderRadius: "var(--radius-sm)",
                    }}
                >
                    <div className="flex items-center gap-2">
                    <Gauge style={{ width: "14px", height: "14px", color: "var(--brand-blue)" }} />
                    <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                        Volume
                    </span>
                    </div>
                    <span
                    style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                    }}
                    >
                    2.1 cm³
                    </span>
                </div>
                </div>

                <div
                className="mt-4 p-3"
                style={{
                    backgroundColor: "rgba(22, 163, 74, 0.05)",
                    border: "1px solid var(--success-600)",
                    borderRadius: "var(--radius-sm)",
                }}
                >
                <div className="flex items-center justify-between mb-2">
                    <span
                    style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                    }}
                    >
                    Quality Score
                    </span>
                    <span
                    style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "var(--success-600)",
                    }}
                    >
                    A
                    </span>
                </div>
                <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                    ✓ Good coverage and lighting
                </div>
                </div>
            </aside>
            </div>
        </div>
        )}

        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          {state === "pre-capture" && (
            <>
              <Button
                onClick={handleCapture}
                className="flex-1 text-white hover:opacity-90 hover:translate-y-[-1px] transition-all"
                style={{ 
                  backgroundColor: 'var(--brand-navy)',
                  borderRadius: 'var(--radius-lg)',
                  height: '44px',
                  boxShadow: '0 2px 8px rgba(17, 45, 79, 0.15)'
                }}
              >
                <Camera style={{ width: '18px', height: '18px', marginRight: '8px' }} />
                Capture 3D
              </Button>
              <Button
                variant="outline"
                className="transition-colors"
                style={{ 
                  borderColor: 'var(--brand-blue)',
                  color: 'var(--brand-blue)',
                  borderRadius: 'var(--radius-lg)',
                  height: '44px'
                }}
              >
                <ImageIcon style={{ width: '18px', height: '18px', marginRight: '8px' }} />
                Photo
              </Button>
              <Button
                variant="ghost"
                size="icon"
                style={{ 
                  color: 'var(--brand-blue)',
                  borderRadius: 'var(--radius-lg)',
                  height: '44px',
                  width: '44px'
                }}
              >
                <HelpCircle style={{ width: '20px', height: '20px' }} />
              </Button>
            </>
          )}
          
          {state === "post-capture" && (
            <>
              <Button
                className="flex-1 text-white hover:opacity-90 hover:translate-y-[-1px] transition-all"
                style={{ 
                  backgroundColor: 'var(--brand-navy)',
                  borderRadius: 'var(--radius-lg)',
                  height: '44px',
                  boxShadow: '0 2px 8px rgba(17, 45, 79, 0.15)'
                }}
              >
                <FileText style={{ width: '18px', height: '18px', marginRight: '8px' }} />
                Accept & Draft Note
              </Button>
              <Button
                onClick={handleRetake}
                variant="outline"
                className="transition-colors"
                style={{ 
                  borderColor: 'var(--brand-blue)',
                  color: 'var(--brand-blue)',
                  borderRadius: 'var(--radius-lg)',
                  height: '44px'
                }}
              >
                <RotateCw style={{ width: '18px', height: '18px', marginRight: '8px' }} />
                Retake
              </Button>
              <Button
                variant="outline"
                className="transition-colors"
                style={{ 
                  borderColor: 'var(--warning-600)',
                  color: 'var(--warning-600)',
                  borderRadius: 'var(--radius-lg)',
                  height: '44px'
                }}
              >
                Flag for Review
              </Button>
            </>
          )}
        </div>

        {/* Footer Disclaimer */}
        <div 
          className="mt-4 pt-4 text-center"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-caption" style={{ color: 'var(--text-muted)' }}>
            Illustrative UI—no patient data. Not for diagnostic use.
          </p>
        </div>
      </div>
    </div>
  );
}
