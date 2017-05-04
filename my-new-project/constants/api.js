import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '590af52b3c2bbc88e4c3acab';

class MeetupApi {
  constructor(){
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}:/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);

    return data.meetups;
  }
}

export {
  MeetupApi
};
