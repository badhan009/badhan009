import {
  ArrowUpRight,
  Bell,
  ChevronDown,
  Command,
  LayoutDashboard,
  Search,
  Users,
  Folder,
  Settings,
  Plus,
  MoreHorizontal,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import type { Project } from "@/data/projects";
export function ProjectInterface({
  theme,
  view = 0,
}: {
  theme: Project["theme"];
  view?: number;
}) {
  if (theme === "commerce")
    return (
      <div className="demo-interface commerce-interface">
        <div className="demo-shop-nav">
          <strong>
            FORM<span>®</span>
          </strong>
          <span>Objects &nbsp; Collections &nbsp; Our story</span>
          <ShoppingBag size={18} />
        </div>
        <div className="commerce-content">
          <span className="demo-kicker">A more considered everyday.</span>
          <h4>
            {view === 1 ? "Less, but\nbetter." : "Good things.\nSimple forms."}
          </h4>
          <p>Everyday objects. Extraordinary attention.</p>
          <span className="demo-shop-link">
            Explore the collection <ArrowUpRight size={15} />
          </span>
          <div className="commerce-type">f.</div>
        </div>
        <div className="shop-bottom">
          <span>Designed for the way you live.</span>
          <span>Collection 001 / 2026</span>
        </div>
      </div>
    );
  if (theme === "agency")
    return (
      <div className="demo-interface agency-interface">
        <div className="agency-nav">
          <strong>orbit®</strong>
          <span>Independent creative studio</span>
          <span>
            MENU <Plus size={12} />
          </span>
        </div>
        <div className="agency-content">
          <span>STRATEGY. DESIGN. A LITTLE GRAVITY.</span>
          <h4>
            {view === 1 ? (
              <>
                Ideas into
                <br />
                <em>impact.</em>
              </>
            ) : (
              <>
                Out of the
                <br />
                <em>ordinary.</em>
              </>
            )}
          </h4>
          <div className="agency-foot">
            <p>
              We help ambitious brands
              <br />
              find their own orbit.
            </p>
            <ArrowUpRight size={50} strokeWidth={1} />
          </div>
        </div>
        <div className="agency-bottom">
          SELECTED WORK &nbsp; ↘<span>2024 — 2026</span>
        </div>
      </div>
    );
  const values = [
    30, 46, 38, 58, 45, 63, 51, 77, 67, 83, 72, 94, 82, 100, 87, 108, 95, 122,
    108, 135, 127, 149, 139, 155,
  ];
  return (
    <div className="demo-interface dashboard-interface">
      <aside className="demo-sidebar">
        <strong>
          <Command size={17} /> nexora
        </strong>
        <span className="demo-workspace">
          Workspace <ChevronDown size={10} />
        </span>
        {[
          { label: "Overview", icon: LayoutDashboard },
          { label: "Projects", icon: Folder },
          { label: "Team", icon: Users },
          { label: "Settings", icon: Settings },
        ].map(({ label, icon: Icon }, i) => (
          <span key={label} className={i === 0 ? "active" : ""}>
            <Icon size={13} />
            {label}
          </span>
        ))}
        <div className="demo-sidebar-bottom">
          Your next big idea
          <br />
          starts here. <ArrowUpRight size={15} />
        </div>
      </aside>
      <div className="demo-main">
        <div className="demo-topbar">
          <span>
            Workspace / <b>{view === 1 ? "Analytics" : "Overview"}</b>
          </span>
          <div>
            <Search size={12} />
            <Bell size={12} />
            <span className="demo-avatar">JD</span>
          </div>
        </div>
        <div className="demo-welcome">
          <div>
            <h4>
              {view === 1
                ? "Your business, at a glance."
                : "Welcome back, Alex"}
              <span>✦</span>
            </h4>
            <p>Here’s what’s happening with your business today.</p>
          </div>
          <span className="demo-action">
            <Plus size={11} /> New project
          </span>
        </div>
        <div className="demo-metrics">
          {[
            ["Total revenue", "$48,256", "+12.8%"],
            ["Active users", "2,420", "+8.2%"],
            ["Active projects", "24", "+4.1%"],
          ].map(([label, value, delta]) => (
            <div key={label}>
              <span>
                {label}
                <ArrowUpRight size={10} />
              </span>
              <strong>{value}</strong>
              <small>
                {delta} <i>vs. last month</i>
              </small>
            </div>
          ))}
        </div>
        <div className="demo-chart">
          <div>
            <b>Revenue overview</b>
            <span>
              This month <ChevronDown size={10} />
            </span>
          </div>
          <div className="chart-content">
            <div className="chart-labels">
              <span>$50k</span>
              <span>$25k</span>
              <span>$0</span>
            </div>
            <div
              className="chart-bars"
              role="img"
              aria-label="Illustrative revenue trend"
            >
              {values.map((v, i) => (
                <i key={i} style={{ height: `${v / 1.6}%` }} />
              ))}
            </div>
          </div>
          <div className="chart-months">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
        <div className="demo-activity">
          <strong>
            Recent projects <MoreHorizontal size={14} />
          </strong>
          <div>
            <span className="demo-project-icon">
              <Folder size={13} />
            </span>
            <span>
              Website redesign<small>Updated 2 hours ago</small>
            </span>
            <span className="demo-badge">In progress</span>
            <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </div>
  );
}
