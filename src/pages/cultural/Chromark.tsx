import EventPageLayout from "@/components/EventPageLayout";

const Chromark = () => {
  return (
    <EventPageLayout
      title="Chromark"
      subtitle="On-Spot Drawing Competition"
      icon="🖌️"
      dates="9th February"
      fee="Free Entry"
      teamSize="Individual"
      themeColor="from-blue-500 to-cyan-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Aamir Hamid", phone: "Cultural Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Time & Format",
          items: [
            "Time limit: 1 hour",
            "Theme announced on spot",
            "Individual participation only",
          ],
        },
        {
          title: "Materials",
          items: [
            "Drawing sheets provided",
            "Participants bring own colors/pencils",
            "Any medium allowed (pencil, colors, etc.)",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Creativity & originality",
            "Theme interpretation",
            "Technique & skill",
            "Completion within time",
          ],
        },
      ]}
    />
  );
};

export default Chromark;
