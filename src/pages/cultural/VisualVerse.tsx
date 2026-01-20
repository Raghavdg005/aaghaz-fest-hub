import EventPageLayout from "@/components/EventPageLayout";

const VisualVerse = () => {
  return (
    <EventPageLayout
      title="Visual Verse"
      subtitle="Online Poetry Competition"
      icon="✍️"
      dates="Result: 11th February"
      fee="Free Entry"
      teamSize="Individual"
      themeColor="from-violet-500 to-purple-600"
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
            "Online submission via Instagram",
            "Theme announced via @aaghaz.gims",
            "Results on 11th February",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Original poetry only",
            "Any language allowed",
            "Submit as Instagram post/reel",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Creativity & originality",
            "Theme interpretation",
            "Literary quality",
            "Presentation",
          ],
        },
      ]}
    />
  );
};

export default VisualVerse;
