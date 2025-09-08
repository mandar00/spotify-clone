import type{ NextFunction } from "express";
import { Songs } from "../models/songs.models";
import { Album } from "../models/album.models";
import { User } from "../models/user.models";

export const getStats = async (req: any, res: any, next: NextFunction) => {
  try {
    const [totalSongs, totalAlbums, totalUsers, uniqueArtists] =
      await Promise.all([
        Songs.countDocuments(),
        Album.countDocuments(),
        User.countDocuments(),
        Songs.aggregate([
          {
            $unionWith: {
              // take all the unique values of the artist field from songs and albums collection
              coll: "album",
              pipeline: [],
            },
          },
          {
            $group: { _id: "$artist" },
          },
          {
            $count: "count",
          },
        ]),
      ]);
    res
      .status(200)
      .json({
        success: true,
        totalSongs,
        totalAlbums,
        totalUsers,
        totalArtist: uniqueArtists[0]?.count || 0,
      });
  } catch (error) {}
};
