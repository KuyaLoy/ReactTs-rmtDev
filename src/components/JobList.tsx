import { JobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type JoblistProps = {
  jobItems: JobItem[];
  isLoading: boolean; // Indicates whether the job items are currently being fetched from the API or not.
};

export function JobList({ jobItems, isLoading }: JoblistProps) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {isLoading &&
        jobItems.map((jobItem) => <JobListItem jobItem={jobItem} />)}
    </ul>
  );
}

export default JobList;
