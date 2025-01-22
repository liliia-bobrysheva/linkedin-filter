import { Job } from "./job";
import { RULES, RuleSet } from "./rules";
import { UI } from "./ui";

export class JobFilter {
  rules: RuleSet;
  allJobs: Job[] = [];
  excludedJobs: Job[] = [];
  filteredJobs: Job[] = [];
  ui: UI;

  constructor(rules: RuleSet) {
    this.rules = rules;
    this.ui = new UI(document);

    // TODO get rid of timeout
    setTimeout(() => {
      if (!this.ui.processBtn) {
        console.log("buttons not found, init failed");
      }
  
      this.ui.processBtn?.addEventListener("click", () => filter.processJobs());
      this.ui.closeExcludedBtn?.addEventListener("click", () => filter.dismissJunk());
      this.ui.closeAllBtn?.addEventListener("click", () => filter.dismissAll());
    }, 2000);
  }

  isExcluded(job: Job): boolean {
    return this.matchRules(job) || this.matchCombinations(job);
  }

  matchRules(job: Job): boolean {
    return this.rules.rules.some((rule) => {
      const [fieldName, regex] = rule;
      return job[fieldName].match(regex);
    });
  }

  matchCombinations(job: Job): boolean {
    return this.rules.combinations.some((combinbation) => {
      return !combinbation.some((rule) => {
        const [fieldName, regex] = rule;
        return !job[fieldName].match(regex);
      });
    });
  }

  processJobs(): void {
    const jobsContainer = document.querySelector(".jobs-search-results-list");

    /*const initialScroll = jobsContainer?.scrollTop;

    console.log("initialScroll");
    console.log(initialScroll);

    jobsContainer?.scroll({
      top: jobsContainer.scrollHeight,
      behavior: "smooth",
    }); */

    //setTimeout(() => {
      // TODO display error if not all jobs has been parsed correctly
      this.allJobs = this.ui.getJobContainers().map((el: Element) => new Job(el));

      if (this.allJobs.length < 1) {
        this.ui.addMessage("Error: Jobs not found.", true);
      }

      this.allJobs.forEach((job) => {
        if (this.isExcluded(job)) {
          this.excludedJobs.push(job);
          job.hide();
        } else {
          this.filteredJobs.push(job);
        }
      });

      console.log("DEBUG: processJobs(), this.excludedJobs");
      console.log(this.excludedJobs);
    //}, 2000);
  }

  dismissJunk(): void {
    this.excludedJobs.forEach(job => {
      job.dismiss();
    });
  }

  dismissAll(): void {
    this.allJobs.forEach(job => {
      job.dismiss();
    });
  }
}

const filter = new JobFilter(RULES);
