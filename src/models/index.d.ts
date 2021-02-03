import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Image {
  readonly id: string;
  readonly imageUrl?: string;
  readonly memberID: string;
  constructor(init: ModelInit<Image>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}

export declare class Member {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly cohortID: string;
  readonly instructor?: boolean;
  readonly Images?: (Image | null)[];
  constructor(init: ModelInit<Member>);
  static copyOf(source: Member, mutator: (draft: MutableModel<Member>) => MutableModel<Member> | void): Member;
}

export declare class Cohort {
  readonly id: string;
  readonly name?: string;
  readonly startDate?: number;
  readonly Members?: (Member | null)[];
  constructor(init: ModelInit<Cohort>);
  static copyOf(source: Cohort, mutator: (draft: MutableModel<Cohort>) => MutableModel<Cohort> | void): Cohort;
}