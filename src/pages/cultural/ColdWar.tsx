import EventPageLayout from "@/components/EventPageLayout";

const ColdWar = () => {
  return (
    <EventPageLayout
      title="Cold War"
      subtitle="Debate Competition"
      icon="🗣️"
      dates="10th February"
      fee="₹100"
      teamSize="Individual"
      themeColor="from-red-600 to-rose-700"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Parthsarthi", phone: "Academic Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Format",
          items: [
            "Time limit: 3–4 minutes per speaker",
            "Topics revealed before round",
            "For/Against positions assigned",
          ],
        },
        {
          title: "Rules",
          items: [
            "English language only",
            "No personal attacks",
            "Points of interruption allowed",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Content & arguments",
            "Delivery & presentation",
            "Rebuttal skills",
            "Overall impact",
          ],
        },
      ]}
    />
  );
};

export default ColdWar;
