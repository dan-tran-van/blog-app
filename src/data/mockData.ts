import { Blog } from "../types/blog.type";

export const initialData: { blogs: Blog[] } = {
  blogs: [
    {
      id: 1,
      thumbnail:
        "https://pbs.twimg.com/media/GZUy2A5XoAAOH0b?format=jpg&name=4096x4096",
      author: {
        id: "1",
        name: "ChatGPT",
      },
      title: "SpaceX Starship: The Next Frontier in Space Exploration",
      subtitle:
        "SpaceX is gearing up for its next major flight test of **Starship**, a fully reusable spacecraft designed to take humanity to the Moon, Mars, and beyond. As one of the most anticipated launches in recent spaceflight history, this flight test represents a pivotal moment for both SpaceX and the future of space exploration.",
      publishedAt: new Date(),
      likeCount: 345,
      commentCount: 4,
      bodyHTML: `# SpaceX Starship: The Next Frontier in Space Exploration

SpaceX is gearing up for its next major flight test of **Starship**, a fully reusable spacecraft designed to take humanity to the Moon, Mars, and beyond. As one of the most anticipated launches in recent spaceflight history, this flight test represents a pivotal moment for both SpaceX and the future of space exploration.

## What is Starship?

**Starship** is SpaceX's ambitious spacecraft designed for interplanetary travel. It consists of two stages: the **Starship** (the upper stage) and the **Super Heavy** booster (the lower stage). Together, these components make up the most powerful launch vehicle ever developed, capable of carrying over 100 tons of cargo or crew into space.

Unlike traditional rockets, Starship is **fully reusable**, which is key to lowering the cost of space travel. SpaceX aims to make space travel more accessible by enabling frequent missions to low Earth orbit, the Moon, and eventually Mars.

## Why This Flight Test Matters

This upcoming test flight is significant because it's another step in proving that Starship can:

1. **Achieve orbit:** The goal is for Starship to reach orbit and re-enter Earth's atmosphere safely.
2. **Prove reusability:** A major focus is on recovering the vehicle in a reusable condition. Both the **Super Heavy booster** and the **Starship upper stage** will attempt to land back on Earth.
3. **Advance human space exploration:** This test will help SpaceX fine-tune Starship for future crewed missions, including NASA’s Artemis program, which aims to return humans to the Moon.

### Key Objectives of the Test Flight

- **Orbital Flight:** The main objective is to get the Starship into orbit and return it safely to Earth.
- **Booster Recovery:** SpaceX plans to recover the **Super Heavy** booster by landing it back on Earth, which would be a major step toward full reusability.
- **Heat Shield Performance:** The flight will test the performance of Starship’s **heat shield**, which is critical for surviving re-entry at high velocities.
- **Controlled Splashdown:** Starship is expected to attempt a controlled splashdown in the ocean, a crucial test of its descent and landing systems.

## What’s Next After This Test?

Should this test flight succeed, SpaceX will move closer to its goal of launching fully crewed missions to space. The next steps will likely include additional testing for longer missions and larger payloads, as well as preparing for NASA's **Artemis III** mission, where Starship is expected to land astronauts on the Moon.

Beyond NASA’s plans, SpaceX aims to use Starship to send humans to **Mars**. Though this goal is still years away, each test flight brings us closer to realizing interplanetary travel.

## Challenges and Risks

As with any cutting-edge technology, there are numerous challenges. Starship’s **massive size**, the complexity of its **reusability**, and the extreme conditions of **atmospheric re-entry** all pose significant risks. SpaceX is known for pushing the boundaries, and while some test flights may experience setbacks, these are crucial learning experiences that propel innovation forward.

## Conclusion

The upcoming SpaceX Starship flight test is more than just another launch; it’s a glimpse into the future of space travel. If successful, it could bring us one step closer to becoming a **multi-planetary species**. Keep an eye on the sky—history could be made once again.

---

Stay tuned for updates on the flight and follow along with SpaceX as they take one giant leap toward the stars!

---

### References

- [SpaceX Official Website](https://www.spacex.com/)
- [NASA Artemis Program](https://www.nasa.gov/specials/artemis/)

      `,
    },
  ],
};

export function getBlogs() {
  return initialData.blogs;
}

export function getBlog(blogId: string) {
  return initialData.blogs.find((blog) => blog.id === Number(blogId));
}
