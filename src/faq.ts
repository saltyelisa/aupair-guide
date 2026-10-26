// Fragen für das aufklappbare FAQ auf der Startseite.
// "todo" und "check" erzeugen die gelben bzw. roten Platzhalter Kästen.
// Die letzte Frage mit locked: true ist der Teaser für den bezahlten Guide.
import type { Lang } from './i18n';

export interface FaqItem { q: string; a: string; todo?: string; check?: string; locked?: boolean }

export const FAQ: Record<Lang, FaqItem[]> = {
  de: [
    {
      q: 'Kann ich ohne Agentur Au-pair in Tahiti werden?',
      a: 'Ja. Agenturen gibt es für Französisch-Polynesien kaum, die meisten Au-pairs finden ihre Familie direkt über lokale Facebook und WhatsApp Gruppen oder über Au-pair Plattformen. Das braucht etwas Geduld, kostet dich aber keine Vermittlungsgebühr.',
      todo: 'Ein Satz, wie lange es bei dir gedauert hat.',
    },
    {
      q: 'Ist Tahiti nicht nur was für Reiche?',
      a: 'Nein. Teuer ist Tahiti vor allem für Touristen, weil Hotels und Essen viel kosten. Als Au-pair wohnst und isst du bei der Familie, und ohne Agentur zahlst du auch keine Vermittlungsgebühr. Am Ende kann das sogar günstiger sein als ein Agentur Programm in einem scheinbar billigeren Land.',
    },
    {
      q: 'Brauche ich ein Visum für Französisch-Polynesien?',
      a: 'Das hängt von deiner Staatsbürgerschaft und davon ab, wie lange du bleibst. Französisch-Polynesien gehört zu Frankreich, hat aber eigene Einreiseregeln, die nicht automatisch denen im Schengen Raum entsprechen.',
      check: 'Aktuelle Regeln für EU Bürger und für Au-pair Aufenthalte mit offiziellen Quellen abgleichen.',
    },
    {
      q: 'Darf ich mit ESTA in Hawaii volunteeren?',
      a: 'Mit ESTA darfst du in den USA nicht arbeiten. Ob Volunteering gegen Unterkunft schon als Arbeit zählt, ist eine Frage, bei der du genau hinschauen solltest, weil die Grenzbeamten das unterschiedlich sehen können.',
      check: 'Mit esta.cbp.dhs.gov und der US Botschaft abgleichen, bevor das online geht.',
    },
    {
      q: 'Was kostet ein Jahr als Au-pair in Tahiti?',
      a: 'Wohnen und Essen übernimmt normalerweise die Familie. Selbst zahlst du meistens Flug, Versicherung und alles, was du in deiner Freizeit machst. Tahiti ist teuer, gerade Ausflüge und Essen gehen läppern sich.',
      todo: 'Deine echten Zahlen grob, die genaue Aufstellung kommt in den Guide.',
    },
    {
      q: 'Was mache ich, wenn es mit der Gastfamilie nicht passt?',
      a: 'Erstmal ehrlich ansprechen, oft sind es Missverständnisse bei Aufgaben oder Arbeitszeiten. Wenn es trotzdem nicht klappt, ist es völlig okay, zu wechseln. Wichtig ist, dass du vorher einen Plan B und etwas Geld für den Notfall hast.',
    },
    {
      q: 'Was schreibe ich einer Familie in der ersten Nachricht?',
      a: 'Bonjour ! Je m’appelle … et je cherche une famille à Tahiti pour …',
      locked: true,
    },
  ],
  en: [
    {
      q: 'Can I become an au pair in Tahiti without an agency?',
      a: 'Yes. There are hardly any agencies for French Polynesia, so most au pairs find their family directly through local Facebook and WhatsApp groups or au pair platforms. It takes some patience, but you pay no placement fee.',
      todo: 'One sentence on how long it took you.',
    },
    {
      q: "Isn't Tahiti only for rich people?",
      a: "No. Tahiti is mainly expensive for tourists, because hotels and food cost a lot. As an au pair you live and eat with the family, and without an agency there's no placement fee. In the end it can even be cheaper than an agency program in a country that seems cheaper.",
    },
    {
      q: 'Do I need a visa for French Polynesia?',
      a: 'It depends on your citizenship and how long you stay. French Polynesia is part of France but has its own entry rules, which are not automatically the same as in the Schengen area.',
      check: 'Compare current rules for EU citizens and au pair stays with official sources.',
    },
    {
      q: 'Can I volunteer in Hawaii on an ESTA?',
      a: "You're not allowed to work in the US on an ESTA. Whether volunteering in exchange for accommodation counts as work is something to look at closely, because border officers may see it differently.",
      check: 'Check against esta.cbp.dhs.gov and the US embassy before publishing.',
    },
    {
      q: 'How much does a year as an au pair in Tahiti cost?',
      a: 'The family usually covers your room and food. You normally pay for your flight, insurance and whatever you do in your free time. Tahiti is expensive, especially trips and eating out.',
      todo: 'Your rough real numbers, the detailed breakdown goes into the guide.',
    },
    {
      q: "What if it doesn't work out with my host family?",
      a: "Talk about it honestly first, it's often a misunderstanding about tasks or hours. If it still doesn't work, it's completely okay to switch. What matters is having a plan B and some emergency money.",
    },
    {
      q: 'What do I write to a family in my first message?',
      a: 'Bonjour ! Je m’appelle … et je cherche une famille à Tahiti pour …',
      locked: true,
    },
  ],
};
