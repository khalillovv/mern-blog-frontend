import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

import { SideBlock } from "./SideBlock";
import { Link } from "react-router-dom";

export const TagsBlock = ({ items, isLoading = true }) => {
  const uniqueItems = Array.from(new Set(items));
  return (
    <SideBlock title="Тэги">
      <List>
        {(isLoading ? [...Array(uniqueItems.length)] : uniqueItems).map(
          (tag, i) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/posts/tag/${tag}`}
              key={i}
            >
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TagIcon />
                  </ListItemIcon>
                  {isLoading ? (
                    <Skeleton width={100} />
                  ) : (
                    <ListItemText primary={tag} />
                  )}
                </ListItemButton>
              </ListItem>
            </Link>
          )
        )}
      </List>
    </SideBlock>
  );
};
