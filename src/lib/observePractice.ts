interface YouTubeChannel {
  addSubscriber: (user: User) => void;
  removeSubscriber: (user: User) => void;
  notify: (message: string) => void;
}

interface User {
  userName: string;
  update: (notification: string) => void;
}

class Channel implements YouTubeChannel {
  constructor(public channelName: string, public subscribers: User[] = []) {}

  addSubscriber(user: User) {
    const exist: User | undefined = this.subscribers.find(
      (subscriber) => subscriber.userName === user.userName
    );

    if (!exist) {
      this.subscribers.push(user);
      console.log(
        `${user.userName || "User"} added successfully to ${this.channelName}`
      );
    } else {
      console.log(
        `${user.userName || "User"} already exists in ${this.channelName}`
      );
    }
  }

  removeSubscriber(user: User) {
    const exist: User | undefined = this.subscribers.find(
      (subscriber) => subscriber.userName === user.userName
    );

    if (exist) {
      this.subscribers = this.subscribers.filter(
        (subscriber) => subscriber.userName !== user.userName
      );
      console.log(
        `${user.userName || "User"} removed successfully from ${
          this.channelName
        }`
      );
    } else {
      console.log(
        `${user.userName || "User"} isn't a subscriber of ${this.channelName}`
      );
    }
  }

  notify(message: string) {
    console.log(
      `Sending notification: "${message}" to ${this.subscribers.length} subscribers.`
    );
    this.subscribers.forEach((subscriber) => {
      subscriber.update(`${this.channelName}: ${message}`);
    });
  }
}

class Subscriber implements User {
  constructor(public userName: string = "user_user") {}
  update(message: string): void {
    console.log(`${this.userName} updated about ${message}`);
  }
}

const dan = new Subscriber("Dan Danino");
const israel = new Subscriber("Israel Israeli");

const videos = new Channel("intresting videos");
const petts = new Channel("intresting petts");

videos.addSubscriber(dan);
videos.addSubscriber(dan);
videos.addSubscriber(israel);
petts.addSubscriber(israel);

videos.notify("TicTok video");
petts.notify("Germany Dog");

//output

// observePractice.ts:22 Dan Danino added successfully to intresting videos
// observePractice.ts:26 Dan Danino already exists in intresting videos
// observePractice.ts:22 Israel Israeli added successfully to intresting videos
// observePractice.ts:22 Israel Israeli added successfully to intresting petts
// observePractice.ts:54 Sending notification: "TicTok video" to 2 subscribers.
// observePractice.ts:66 Dan Danino updated about intresting videos: TicTok video
// observePractice.ts:66 Israel Israeli updated about intresting videos: TicTok video
// observePractice.ts:54 Sending notification: "Germany Dog" to 1 subscribers.
// observePractice.ts:66 Israel Israeli updated about intresting petts: Germany Dog
// observePractice.ts:22 Dan Danino added successfully to intresting videos
// observePractice.ts:26 Dan Danino already exists in intresting videos
// observePractice.ts:22 Israel Israeli added successfully to intresting videos
// observePractice.ts:22 Israel Israeli added successfully to intresting petts
// observePractice.ts:54 Sending notification: "TicTok video" to 2 subscribers.
// observePractice.ts:66 Dan Danino updated about intresting videos: TicTok video
// observePractice.ts:66 Israel Israeli updated about intresting videos: TicTok video
// observePractice.ts:54 Sending notification: "Germany Dog" to 1 subscribers.
// observePractice.ts:66 Israel Israeli updated about intresting petts: Germany Dog
export { Subscriber, Channel };
