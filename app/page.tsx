import { JobApplications } from "@/components/job-board";

export default function ApplicationsBoard() {
  return (
    <section className="h-full overflow-x-auto p-2 md:h-auto md:overflow-visible">
      <div className="flex h-full gap-2 md:grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2">
        {/* Job Applications */}
        {[...Array(5)].map((_, i) => (
          <JobApplications key={i} />
        ))}
      </div>
    </section>
  );
}
