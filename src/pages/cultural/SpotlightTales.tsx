import EventPageLayout from "@/components/EventPageLayout";

const SpotlightTales = () => {
  return (
    <EventPageLayout
      title="Spotlight Tales"
      subtitle="Monologue/Mono Act Competition"
      icon="🎭"
      dates="10th February"
      fee="₹100"
      teamSize="Individual"
      themeColor="from-orange-500 to-red-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Aamir Hamid", phone: "Cultural Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Performance",
          items: [
            "Time limit: 5–8 minutes",
            "Any theme/genre allowed",
            "Solo performance only",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Props allowed",
            "Script can be original or adapted",
            "Any language allowed",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Acting & expression",
            "Script/content quality",
            "Stage presence",
            "Overall impact",
          ],
        },
      ]}
    />
  );
};

export default SpotlightTales;
