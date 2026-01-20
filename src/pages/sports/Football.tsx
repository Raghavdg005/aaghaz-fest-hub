import EventPageLayout from "@/components/EventPageLayout";

const Football = () => {
  return (
    <EventPageLayout
      title="7v7 Football"
      subtitle="Battle for glory on the turf"
      icon="⚽"
      dates="5th – 8th February"
      fee="₹500 per team"
      teamSize="7 players + 3 subs"
      themeColor="from-green-500 to-emerald-600"
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
          title: "Match Format",
          items: [
            "7 vs 7 format",
            "Two halves of 15 minutes each",
            "Half-time break as per schedule",
          ],
        },
        {
          title: "Team Composition",
          items: [
            "Maximum: 10 players per team",
            "Minimum: 7 players required to start",
            "Less than 7 players → team forfeits match",
          ],
        },
        {
          title: "Rules of Play",
          items: [
            "Offside rule applicable",
            "Back-pass to goalkeeper not allowed",
            "Goalkeeper restarts play from goal area",
            "Fair shoulder contact allowed",
          ],
        },
        {
          title: "Substitutions",
          items: [
            "Rolling substitutions allowed",
            "Only with referee's permission",
          ],
        },
        {
          title: "Uniform & Equipment",
          items: [
            "Proper sports shoes mandatory",
            "Metal studs strictly prohibited",
            "Proper numbered jerseys compulsory",
          ],
        },
        {
          title: "Discipline",
          items: [
            "Yellow and red card rules applicable",
            "Misconduct may lead to disqualification",
            "Referee's decision is final",
          ],
        },
        {
          title: "Knockout Rules",
          items: [
            "Knockout format",
            "Draw → Penalty shootout",
            "Sudden death if required",
            "Only on-field players can take penalties",
          ],
        },
        {
          title: "Reporting & Walkover",
          items: [
            "Teams must report on time",
            "Delay > 5 minutes → 0–3 walkover loss",
          ],
        },
      ]}
    />
  );
};

export default Football;
