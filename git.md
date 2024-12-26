ADD TO STAGE
git add README.md

ADD ALL TO STAGE
git add .

REMOVE FILE
git rm --cached README.md
git rm --cached -r .

COMMIT
git commit -m ""

ADD TO STAGE AND COMMIT
git commit -a -m

SHOW CHANGES
git diff

SHOW COMMITS
git log

SHOW COMMITS IN ONELINE
git log --oneline

SHOW 2 LAST COMMITS IN ONELINE
git log -2 --oneline

SHOW COMMITS IN ONE LINE AND CHANGES
git log -p --oneline

REMOVE CHANGES FOR LAST COMMIT
git checkout -- index.html //برگردوندن فایل

UNSTAGE
git reset HEAD . // انستیج


git reset f0e5d15 // برگشتن به یک کامیت


git reset --hard f0e5d15 // برگشتن به یک کامیت و اعمال تغییرات

# BRANCH

create
git branch dev

switch
git checkout dev

delete
git branch -d dev

create and switch
git checkout -b dev

MERGE
git merge dev


# stash

create
git stash
git stash save "message"

list
git stash list

delete
git stash drop stash@{0}


show chenage
git stash show stash@{0}
git stash show -p stash@{0}

apply
git stash apply stash@{0}

apply and delete stash
git stash pop stash@{0}

# Git Ignore
touch .gitignore

git rm --cached -r .
git add .

folder1/

*.txt

!a.txt

#

git remote add origin https://github.com/mjalalideveloper/Test.git


git push -u origin master

git pull origin

git clone https://github.com/mjalalideveloper/Test.git
