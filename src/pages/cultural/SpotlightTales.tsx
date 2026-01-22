import EventPageLayout from "@/components/EventPageLayout";

const SpotlightTales = () => {
  return (
    <EventPageLayout
      title="Spotlight Tales"
      subtitle="Monologue Competition"
      icon="🎭"
      dates="10th February 2026"
      fee="₹100"
      teamSize="Individual"
      venue="Sanjeevani Hall, Academic Block"
      themeColor="from-orange-500 to-red-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "9643688998" },
        { name: "Aamir Hamid", phone: "7004820042" },
        { name: "Kushagra Saxena", phone: "9220536297" },
      ]}
      ruleSections={[
        {
          title: "Event Details",
          items: [
            "Time: 3:00 PM – 4:30 PM",
            "Language: Hindi / English / Hinglish",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 5–8 minutes",
            "Solo performance only",
            "Original or inspired content allowed",
            "Props allowed",
            "No vulgar or offensive content",
            "Exceeding time limit leads to negative marking",
            "Judges' decision will be final",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before event",
            "Carry College ID & BR Card",
          ],
        },
      ]}
    />
  );
};

export default SpotlightTales;
