import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, { items }) => {
    const normalizeFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }
);
