
export interface Card {
  id: string;
  fullName: string;
  userName: string;
  avatarSrc: string;
  comment: string;
}

const cardsData: Card[] = [
  {
    id: '1',
    fullName: 'Sarah Dole',
    userName: '@sarahdole',
    avatarSrc: 'profile-thumbnail.jpg',
    comment:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
];

export const TestimonialCard = () => (
  <div className="grid min-h-screen place-items-center">
    {cardsData.map((card) => (
      <div
        key={card.id}
        className="w-85 h-58.25 bg-white rounded-lg p-6 "
      >
        <div className="mb-6">
          <div className="flex justify-start items-center gap-4">
            <span className="w-12 h-12">
              <img
                src={`/${card.avatarSrc}`}
                alt={card.fullName}
                className="w-full h-full rounded-full object-cover"
              />
            </span>
            <div className="flex justify-start items-start flex-col gap-px">
              <span className="font-semibold text-lg text-neutral-900">
                {card.fullName}
              </span>
              <span className="font-normal text-left text-sm text-neutral-600">
                {card.userName}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-left font-normal text-base text-neutral-600 ">
              {card.comment}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
