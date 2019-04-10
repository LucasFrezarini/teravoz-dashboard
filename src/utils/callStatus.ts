interface StatusMapping {
  [key: string]: string;
}

const mapping: StatusMapping = {
  "call.new": "new",
  "call.standby": "stand by",
  "call.waiting": "waiting",
  "actor.entered": "attendant answered",
  "call.ongoing": "on going",
  "actor.left": "attendant left",
  "call.finished": "finished",
};

const callStatus = (status: string): string => {
  if (!mapping[status]) {
    return "unknown";
  }

  return mapping[status];
};

export default callStatus;
