import Realm from 'realm';

const ITEM_SCHEMA = {
  name: 'ReduxPersistItem',
  primaryKey: 'name',
  properties: {
    name: 'string',
    content: 'string',
  },
};

// Wrap function to support both Promise and callback
// Copied from repo https://github.com/Nohac/redux-persist-expo-fs-storage/blob/master/index.js
async function withCallback<R>(
  callback:
    | ((error: Error | null, result: R | void) => void)
    | null
    | undefined,
  func: () => Promise<R>,
) {
  try {
    const result = await func();
    if (callback) {
      callback(null, result);
    }
    return result;
  } catch (err: any) {
    if (callback) {
      callback(err);
    } else {
      throw err;
    }
  }
}

function createRealmAccess(path = Realm.defaultPath) {
  let __realm: Realm | null = null;
  return async function accessRealm() {
    if (!__realm) {
      try {
        __realm = await Realm.open({
          schema: [ITEM_SCHEMA],
          path,
        });
      } catch (error) {
        throw error;
      }
    }
    return __realm;
  };
}

export function createRealmPersistStorage({path}: any = {}) {
  const accessRealm = createRealmAccess(path);

  async function accessItemInstances() {
    const realm = await accessRealm();
    return realm.objects(ITEM_SCHEMA.name);
  }

  async function getItem(key: string, callback: any) {
    return withCallback(callback, async function () {
      const items = await accessItemInstances();
      const matches = items.filtered(`name = "${key}"`);
      if (matches.length > 0 && matches[0]) {
        return matches[0].content;
      } else {
        throw new Error(`Could not get item with key: '${key}'`);
      }
    });
  }

  async function setItem(key: string, value: any, callback: any) {
    return withCallback(callback, async function () {
      const realm = await accessRealm();
      realm.write(() => {
        realm.create(
          ITEM_SCHEMA.name,
          {
            name: key,
            content: value,
          },
          true,
        );
      });
    });
  }

  async function removeItem(key: string, callback: any) {
    return withCallback(callback, async function () {
      const realm = await accessRealm();
      const items = await accessItemInstances();
      realm.write(() => {
        const item = items.filtered(`name = "${key}"`);
        realm.delete(item);
      });
    });
  }

  return {
    getItem,
    setItem,
    removeItem,
  };
}
