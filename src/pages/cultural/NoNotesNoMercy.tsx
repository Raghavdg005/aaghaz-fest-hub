import EventPageLayout from "@/components/EventPageLayout";

const NoNotesNoMercy = () => {
  return (
    <EventPageLayout
      title="No Notes No Mercy"
      subtitle="Declamation Competition"
      icon="🎙️"
      dates="11th February"
      fee="₹100"
      teamSize="Individual"
      themeColor="from-slate-600 to-gray-700"
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
            "Language: English",
            "No notes or prompts allowed",
            "Speech of a famous personality",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Memorized speech delivery",
            "Props/costumes optional",
            "Introduction of personality required",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Memorization & accuracy",
            "Delivery & expression",
            "Stage presence",
            "Overall impact",
          ],
        },
      ]}
    />
  );
};

export default NoNotesNoMercy;
