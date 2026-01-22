import EventPageLayout from "@/components/EventPageLayout";

const Basketball = () => {
  return (
    <EventPageLayout
      title="Basketball"
      subtitle="Basketball Championship"
      icon="🏀"
      dates="5th – 8th February 2026"
      fee="₹500 per team"
      teamSize="5 on court (12 max)"
      themeColor="from-orange-600 to-amber-500"
      backLink="/sports"
      backLabel="Back to Sports"
      registrationLink="https://forms.gle/p4Vc7suxnNLh2TWd8"
      contacts={[
        { name: "Aadi Joshi", phone: "9625570511" },
        { name: "Aarshi Agrawal", phone: "8630428820" },
        { name: "Priyanshu Bharti", phone: "8126271650" },
        { name: "Vedanshi Panwar", phone: "8791945816" },
      ]}
      ruleSections={[
        {
          title: "Format",
          items: [
            "FIBA rules applicable",
            "4 quarters × 8 minutes each",
            "Overtime if scores are tied",
          ],
        },
        {
          title: "Team Composition",
          items: [
            "Maximum: 12 players per team",
            "5 players on court at a time",
            "Minimum 5 players required to start",
          ],
        },
        {
          title: "Time-Outs",
          items: [
            "3 time-outs in first half",
            "2 time-outs in second half",
            "1 time-out in overtime",
          ],
        },
        {
          title: "Uniform",
          items: [
            "Proper jersey with numbers mandatory",
          ],
        },
        {
          title: "Discipline",
          items: [
            "Unsportsmanlike conduct → Disqualification",
            "Referee's decision is final",
          ],
        },
      ]}
    />
  );
};

export default Basketball;
