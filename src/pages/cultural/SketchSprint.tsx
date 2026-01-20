import EventPageLayout from "@/components/EventPageLayout";

const SketchSprint = () => {
  return (
    <EventPageLayout
      title="Sketch Sprint"
      subtitle="Relay Art Competition"
      icon="✏️"
      dates="10th February"
      fee="Free Entry"
      teamSize="Team of 3"
      themeColor="from-teal-500 to-emerald-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Aamir Hamid", phone: "Cultural Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Format",
          items: [
            "Team of 3 members",
            "Time limit: 30 minutes total",
            "Each member draws in turns",
          ],
        },
        {
          title: "Rules",
          items: [
            "No communication during drawing",
            "Each member gets 10 minutes",
            "Theme announced at start",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Coherence of final artwork",
            "Creativity & interpretation",
            "Team coordination through art",
          ],
        },
      ]}
    />
  );
};

export default SketchSprint;
