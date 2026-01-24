import EventPageLayout from "@/components/EventPageLayout";

const NoNotesNoMercy = () => {
  return (
    <EventPageLayout
      title="No Notes No Mercy"
      subtitle="Declamation Competition"
      icon="🎙️"
      dates="11th February 2026"
      fee="₹100"
      teamSize="Individual"
      venue="LT-3, Academic Block"
      themeColor="from-slate-600 to-gray-700"
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
            "Language: English",
            "Theme: Any famous personality (Sports / Politics / Others — Actors & Actresses not allowed)",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 3–5 minutes",
            "Exceeding time limit may lead to negative marking",
            "Use of obscene or vulgar language is prohibited",
            "Judges' decision will be final and binding",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before the event",
            "Carry College ID",
          ],
        },
      ]}
    />
  );
};

export default NoNotesNoMercy;
