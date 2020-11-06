import { DateTime } from "luxon";
import { User } from "../../../domain/model/User";
import { InternalServerError } from "../../../util/HttpException";
import { UserRO } from "./UserRO";
import { UsersRO } from "./UsersRO";

export class UserSerializer {
  serialize(user: User): UserRO {
    return {
      user: this.toJson(user),
    };
  }

  serializeArray(users: User[]): UsersRO {
    const modUsers = users.map(this.toJson);
    return {
      userCount: modUsers.length,
      users: modUsers,
    };
  }

  private toJson(user: User) {
    const { id, createdAt, updatedAt, ...props } = user;

    if (id === undefined)
      throw new InternalServerError("The id must not be undefined.");
    if (createdAt === undefined)
      throw new InternalServerError("The createdAt must not be undefined.");
    if (updatedAt === undefined)
      throw new InternalServerError("The updatedAt must not be undefined.");

    return {
      id,
      createdAt: DateTime.fromJSDate(createdAt)
        .setLocale("ja")
        .toFormat("yyyy-LL-dd-HH-mm-ss"),
      updatedAt: DateTime.fromJSDate(updatedAt)
        .setLocale("ja")
        .toFormat("yyyy-LL-dd-HH-mm-ss"),
      ...props,
    };
  }
}
