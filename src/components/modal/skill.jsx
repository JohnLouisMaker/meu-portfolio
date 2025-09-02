export default function SkillContent({ skill }) {
  if (!skill) return null;
  const { Icon, title, description, experience, color } = skill;

  return (
    <div className="custom-scrollbar space-y-4 flex flex-col items-center text-center">
      <Icon className={`w-20 h-24 ${color}`} />
      <h3 className="text-2xl font-raleway-bold mb-2">{title}</h3>
      <div className="mt-8 text-left max-w-xl w-full">
        <h4 className={`font-outfit text-base ${color}`}>
          Experiência: <strong>{experience}</strong>
        </h4>
        <pre className="font-outfit text-base text-zinc-200 whitespace-pre-wrap">{description}</pre>
      </div>
    </div>
  );
}
