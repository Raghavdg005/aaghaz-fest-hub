import EventPageLayout from "@/components/EventPageLayout";

const Basketball = () => {
  return (
    <EventPageLayout
      title="Hoops"
      subtitle="Basketball Championship"
      icon="🏀"
      dates="5th – 8th February"
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
          title: "Team Rules",
          items: [
            "12 players maximum",
            "5 players on court",
            "Minimum 5 players required to start",
          ],
        },
        {
          title: "Match Format",
          items: [
            "4 quarters × 8 minutes each",
            "Overtime if scores are tied",
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
            "Proper numbered jerseys compulsory",
            "Matching team uniforms required",
          ],
        },
        {
          title: "Discipline",
          items: [
            "Unsportsmanlike behavior → disqualification",
            "Referee's decision is final",
          ],
        },
      ]}
    />
  );
};

export default Basketball;
