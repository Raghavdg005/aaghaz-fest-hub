import EventPageLayout from "@/components/EventPageLayout";

const HaHaHaveli = () => {
  return (
    <EventPageLayout
      title="Ha Ha Haveli"
      subtitle="हास्य कवि सम्मेलन"
      icon="😂"
      dates="10th February 2026"
      fee="₹100"
      teamSize="Individual"
      venue="LT-3, Academic Block"
      themeColor="from-yellow-500 to-orange-500"
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
            "Time: 4:30 PM – 6:00 PM",
            "Language: Hindi",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 3–5 minutes",
            "Solo performance only",
            "Content must be original",
            "Obscene or vulgar language is strictly prohibited",
            "Exceeding time limit may lead to negative marking",
            "Judges' decision will be final",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes prior",
            "Carry College ID",
          ],
        },
      ]}
    />
  );
};

export default HaHaHaveli;
