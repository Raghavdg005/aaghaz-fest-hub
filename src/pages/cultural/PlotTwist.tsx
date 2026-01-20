import EventPageLayout from "@/components/EventPageLayout";

const PlotTwist = () => {
  return (
    <EventPageLayout
      title="Plot Twist"
      subtitle="Short Film Competition"
      icon="🎬"
      dates="11th February"
      fee="₹500 per team"
      teamSize="Team"
      themeColor="from-slate-600 to-zinc-700"
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
            "Duration: 10–20 minutes",
            "Pre-recorded submission",
            "Screening on 11th February",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Original content only",
            "Any language allowed (subtitles if non-English)",
            "HD quality minimum",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Storytelling & screenplay",
            "Cinematography & editing",
            "Acting & direction",
            "Theme & message",
          ],
        },
      ]}
    />
  );
};

export default PlotTwist;
