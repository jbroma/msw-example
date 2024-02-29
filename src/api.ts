export type PhoneEntry = {
  id: string;
  name: string;
  data: {
    year: number;
    price: number;
    'CPU Model': string;
    'Hard disk size': string;
  } | null;
};

type NewPhoneEntryRequestData = Exclude<PhoneEntry, 'id'>;
type NewPhoneEntryResponseData = PhoneEntry & {createdAt: string};

function getSinglePhoneEntry(id: number): Promise<PhoneEntry> {
  if (id < 0) {
    return Promise.reject('ID must be a non-negative number');
  }

  return fetch('https://api.restful-api.dev/objects/' + id, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => {
      return response.json();
    })
    .then(json => json);
}

function postNewPhoneEntry(
  entry: NewPhoneEntryRequestData,
): Promise<NewPhoneEntryResponseData> {
  return fetch('https://api.restful-api.dev/objects/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry),
  })
    .then(response => response.json())
    .then(json => json);
}

export {getSinglePhoneEntry, postNewPhoneEntry};
