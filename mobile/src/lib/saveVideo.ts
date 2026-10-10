import { File, Paths } from "expo-file-system";
import { EncodingType, StorageAccessFramework, readAsStringAsync } from "expo-file-system/legacy";

export async function saveVideoToDevice(url: string, id: string) {
  const destination = new File(Paths.cache, `linde-${id}.mp4`);
  if (destination.exists) destination.delete();
  const file = await File.downloadFileAsync(url, destination);

  const downloads = StorageAccessFramework.getUriForDirectoryInRoot("Download");
  const permission = await StorageAccessFramework.requestDirectoryPermissionsAsync(downloads);
  if (!permission.granted) return false;

  const target = await StorageAccessFramework.createFileAsync(permission.directoryUri, `linde-${id}`, "video/mp4");
  const contents = await readAsStringAsync(file.uri, { encoding: EncodingType.Base64 });
  await StorageAccessFramework.writeAsStringAsync(target, contents, { encoding: EncodingType.Base64 });
  return true;
}
