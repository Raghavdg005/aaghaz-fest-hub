import EventPageLayout from "@/components/EventPageLayout";

const PlotTwist = () => {
  return (
    <EventPageLayout
      title="Plot Twist"
      subtitle="Twisted Films Competition"
      icon="🎬"
      dates="11th February 2026"
      fee="₹100 per participant"
      teamSize="Maximum 15 members"
      venue="Sanjeevani Hall, Academic Block"
      themeColor="from-slate-600 to-zinc-700"
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
            "Time: 1:30 PM – 3:30 PM",
          ],
        },
        {
          title: "Rules",
          items: [
            "Film duration: 10–20 minutes",
            "Maximum team size: 15 participants",
            "Theme must include a twist / unconventional ending",
            "No offensive or explicit content",
            "Exceeding time limit leads to negative marking",
            "Judges' decision will be final",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Any multimedia support must be submitted one day prior",
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

export default PlotTwist;
