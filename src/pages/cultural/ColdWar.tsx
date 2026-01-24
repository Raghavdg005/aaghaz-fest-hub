import EventPageLayout from "@/components/EventPageLayout";

const ColdWar = () => {
  return (
    <EventPageLayout
      title="Cold War"
      subtitle="Debate Competition"
      icon="🗣️"
      dates="10th February 2026"
      fee="₹100"
      teamSize="Individual"
      venue="LT-3, Academic Block"
      themeColor="from-red-600 to-rose-700"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "ParthSarthi", phone: "8081872289" },
        { name: "Rashi Sharma", phone: "9971956712" },
      ]}
      ruleSections={[
        {
          title: "Event Details",
          items: [
            "Time: 9:00 AM – 11:00 AM",
          ],
        },
        {
          title: "Rules",
          items: [
            "Individual participation",
            "Participants will speak for or against the motion",
            "Intercollege pairs formed by random chit draw",
            "Time limit: 3–4 minutes",
            "Topics revealed 1 hour prior to event",
            "Obscene language leads to disqualification",
            "Judges' decision will be final",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before event",
            "Carry College ID",
          ],
        },
      ]}
    />
  );
};

export default ColdWar;
